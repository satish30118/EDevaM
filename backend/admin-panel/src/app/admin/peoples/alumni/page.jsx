"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const AlumniPage = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const router = useRouter();

  // Fetch alumni list on component mount
  useEffect(() => {
    fetchAlumni();
  }, []);

  // Fetch alumni data from the API
  const fetchAlumni = async () => {
    try {
      const response = await axios.get("/api/people/?alumni=true");
      setAlumniList(response.data);
    } catch (error) {
      console.error("Error fetching alumni:", error);
      // toast.error("Error fetching alumni!");
    }
  };

  // Handle the click event to initiate deletion
  const handleDeleteClick = (id) => {
    setDeleteId(id);
  };

  // Confirm and execute the deletion of an alumni member
  const confirmDeleteAlumni = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`/api/people/${deleteId}`);
      setDeleteId(null);
      fetchAlumni();
      toast.success("Alumni deleted successfully!");
    } catch (error) {
      console.error("Error deleting alumni:", error);
      toast.error("Error deleting alumni!");
    }
  };

  // Navigate to the update page for an alumni member
  const handleUpdateAlumni = (id) => {
    router.push(`/admin/peoples/alumni/update/${id}`);
  };

  return (
    <div className="px-3">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-4 text-white">Alumni Management</h1>

      {/* Alumni List Table */}
      <table className="min-w-full bg-gray-800 border border-gray-700">
        <thead>
          <tr className="bg-gray-700 text-left">
            <th className="p-4 border-b text-white">Image</th>
            <th className="p-4 border-b text-white">Name</th>
            <th className="p-4 border-b text-white">Position</th>
            <th className="p-4 border-b text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {alumniList.map((member) => (
            <tr key={member._id} className="hover:bg-gray-600 border-b border-gray-700">
              <td className="p-4">
                <img
                  src={`data:image/jpeg;base64,${member.img?.toString('base64')}`}
                  alt={member.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </td>
              <td className="p-4 font-semibold text-white">{member.name}</td>
              <td className="p-4 font-bold text-white">{member.position}</td>
              <td className="p-4 w-24 ">
                <div className="flex justify-center h-full space-x-4">
                  <FaEdit
                    className="text-yellow-400 cursor-pointer hover:text-yellow-500 transition-colors"
                    onClick={() => handleUpdateAlumni(member._id)}
                    title="Update member"
                  />
                  <FaTrashAlt
                    className="text-red-400 cursor-pointer hover:text-red-500 transition-colors"
                    onClick={() => handleDeleteClick(member._id)}
                    title="Delete member"
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
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p>Do you want to delete this alumni member?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={confirmDeleteAlumni}
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

export default AlumniPage;
