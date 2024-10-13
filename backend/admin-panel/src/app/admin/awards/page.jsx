"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const AwardsPage = () => {
  const [awardList, setAwardList] = useState([]);
  const [awardContent, setAwardContent] = useState("");
  const [awardYear, setAwardYear] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const router = useRouter();

  // Fetch existing awards when the component mounts
  useEffect(() => {
    fetchAwards();
  }, []);

  // Fetch awards from the API
  const fetchAwards = async () => {
    try {
      const response = await axios.get("/api/awards"); // Adjust your API endpoint
      setAwardList(response.data);
    } catch (error) {
      console.error("Error fetching awards:", error);
      toast.error("Error fetching awards!");
    }
  };

  // Handle adding new award
  const handleAddAward = async () => {
    if (awardContent.trim() && awardYear.trim()) {
      try {
        const newAward = {
          content: awardContent,
          year: awardYear,
        };

        await axios.post("/api/awards", newAward); // Adjust your API endpoint
        
        // Clear the form and fetch the updated award list
        setAwardContent("");
        setAwardYear("");
        toast.success("Award added successfully!");
        fetchAwards();
      } catch (error) {
        console.error("Error adding award:", error);
        toast.error("Error adding award!");
      }
    } else {
      toast.warn("Enter content and year!");
    }
  };

  // Handle the initial delete icon click to show the confirmation modal
  const handleDeleteClick = (id) => {
    setDeleteId(id);
  };

  // Confirm deletion and delete the award
  const confirmDeleteAward = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`/api/awards/${deleteId}`); // Adjust your API endpoint
      setDeleteId(null);
      fetchAwards();
      toast.success("Award deleted successfully!");
    } catch (error) {
      console.error("Error deleting award:", error);
      toast.error("Error deleting award!");
    }
  };

  // Handle updating an award
  const handleUpdateAward = (id) => {
    router.push(`/admin/awards/update/${id}`); // Adjust your routing as needed
  };

  return (
    <div className="px-3">
      <ToastContainer />
      
      <h1 className="text-2xl font-bold text-center mb-4 text-white">Award Management</h1>
      
      {/* Add New Award Section */}
      <div className="mb-6">
        <textarea
          placeholder="Award content"
          value={awardContent}
          onChange={(e) => setAwardContent(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none h-32 mb-2"
        />
        <input
          type="number"
          placeholder="Award year"
          value={awardYear}
          onChange={(e) => setAwardYear(e.target.value)}
          className="border outline-none rounded text-black px-4 py-2 w-full mb-2"
        />
        <button
          onClick={handleAddAward}
          className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600"
        >
          Add Award
        </button>
      </div>
      
      {/* Award List Table */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 border-b">Award Content</th>
            <th className="p-4 border-b">Year</th>
            <th className="p-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {awardList.map((award) => (
            <tr key={award.id} className="hover:bg-gray-50 border-b">
              <td className="p-4 font-semibold">{award.content}</td>
              <td className="p-4 w-10 font-bold">{award.year}</td>
              <td className="p-4 w-24 flex justify-center h-full space-x-4">
                <FaEdit
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleUpdateAward(award._id)}
                  title="Update award"
                />
                <FaTrashAlt
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteClick(award._id)}
                  title="Delete award"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Deletion Confirmation Popup */}
      {deleteId != null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p>Do you want to delete this award?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={confirmDeleteAward}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
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

export default AwardsPage;
