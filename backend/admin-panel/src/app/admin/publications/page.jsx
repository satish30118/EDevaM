"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const PublicationPage = () => {
  const [publicationList, setPublicationList] = useState([]);
  const [publicationContent, setPublicationContent] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const router = useRouter();

  // Fetch existing publications when the component mounts
  useEffect(() => {
    fetchPublications();
  }, []);

  // Fetch publications from the API
  const fetchPublications = async () => {
    try {
      const response = await axios.get("/api/publication");
      setPublicationList(response.data);
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };

  // Handle adding new publication
  const handleAddPublication = async () => {
    if (publicationContent.trim() && publicationYear.trim()) {
      try {
        const newPublication = {
          content: publicationContent,
          year: publicationYear,
        };

        await axios.post("/api/publication", newPublication);
        
        // Clear the form and fetch the updated publication list
        setPublicationContent("");
        setPublicationYear("");
        toast.success("Publication added successfully!");
        fetchPublications();
      } catch (error) {
        console.error("Error adding publication:", error);
        toast.error("Error adding publication!");
      }
    } else {
      toast.warn("Enter content and year!");
    }
  };

  // Handle the initial delete icon click to show the confirmation modal
  const handleDeleteClick = (id) => {
    setDeleteId(id);
  };

  // Confirm deletion and delete the publication
  const confirmDeletePublication = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`/api/publication/${deleteId}`);
      setDeleteId(null);
      fetchPublications();
      toast.success("Publication deleted successfully!");
    } catch (error) {
      console.error("Error deleting publication:", error);
      toast.error("Error deleting publication!");
    }
  };

  // Handle updating a publication
  const handleUpdatePublication = (id) => {
    router.push(`/admin/publications/update/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-800 px-3 py-3">
      <ToastContainer />
      
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Publication Management</h1>
      
      {/* Add New Publication Section */}
      <div className="bg-gray-900 p-5  rounded-lg shadow-lg mb-6">
        <textarea
          placeholder="Publication content"
          value={publicationContent}
          onChange={(e) => setPublicationContent(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none mb-2 h-32 bg-gray-800 text-white"
        />
        <input
          type="number"
          placeholder="Publication year"
          value={publicationYear}
          onChange={(e) => setPublicationYear(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none mb-2 bg-gray-800 text-white"
        />
        <button
          onClick={handleAddPublication}
          className="bg-green-600 my-3 text-white px-4 py-2 w-1/3 rounded flex items-center justify-center hover:bg-green-700 transition duration-300"
        >
         <FaPlus className="mr-2" /> Add Publication
        </button>
      </div>
      
      {/* Publication List Table */}
      <table className="min-w-full bg-gray-800 border border-gray-700  shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-left">
            <th className="p-4 border-b border-gray-700 text-white">Publication Content</th>
            <th className="p-4 border-b border-gray-700 text-white">Year</th>
            <th className="p-4 border-b border-gray-700 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {publicationList.map((publication) => (
            <tr key={publication.id} className="hover:bg-gray-600 border-b border-gray-700">
              <td className="p-4 text-white">{publication.content}</td>
              <td className="p-4 font-bold text-white">{publication.year}</td>
              <td className="p-4">
                <div className="flex justify-center space-x-4">
                  <FaEdit
                    className="text-blue-300 cursor-pointer hover:text-blue-400 transition duration-200"
                    onClick={() => handleUpdatePublication(publication._id)}
                    title="Update publication"
                  />
                  <FaTrashAlt
                    className="text-red-300 cursor-pointer hover:text-red-400 transition duration-200"
                    onClick={() => handleDeleteClick(publication._id)}
                    title="Delete publication"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Deletion Confirmation Popup */}
      {deleteId != null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p>Do you want to delete this publication?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                onClick={confirmDeletePublication}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                onClick={() => setDeleteId(null)} // Close the modal without deleting
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationPage;
