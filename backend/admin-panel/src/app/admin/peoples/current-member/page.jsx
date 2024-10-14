"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const MemberPage = () => {
  const [memberList, setMemberList] = useState([]);
  const [memberName, setMemberName] = useState("");
  const [memberPosition, setMemberPosition] = useState("");
  const [memberAbout, setMemberAbout] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [memberImg, setMemberImg] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get("/api/people/?alumni=false");
      setMemberList(response.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handleAddMember = async () => {
    if (memberName.trim() && memberPosition.trim() && memberAbout.trim() && memberImg) {
      const formData = new FormData();
      formData.append("img", memberImg);
      formData.append("name", memberName);
      formData.append("about", memberAbout);
      formData.append("position", memberPosition);
      formData.append("socialMediaLinks", socialMediaLinks);

      try {
        await axios.post("/api/people", formData);
        // Clear the form and fetch the updated member list
        setMemberName("");
        setMemberPosition("");
        setMemberAbout("");
        setSocialMediaLinks("{}");
        setMemberImg(null);
        toast.success("Member added successfully!");
        fetchMembers();
      } catch (error) {
        console.error("Error adding member:", error);
        toast.error("Error adding member!");
      }
    } else {
      toast.warn("Enter all fields!");
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
  };

  const confirmDeleteMember = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`/api/people/${deleteId}`);
      setDeleteId(null);
      fetchMembers();
      toast.success("Member deleted successfully!");
    } catch (error) {
      console.error("Error deleting member:", error);
      toast.error("Error deleting member!");
    }
  };

  const handleUpdateMember = (id) => {
    router.push(`/admin/peoples/current-member/update/${id}`);
  };

  return (
    <div className="px-3">
      <ToastContainer />

      <h1 className="text-2xl font-bold text-center mb-4 text-white">Lab Members Management</h1>

      {/* Add New Member Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none mb-2"
        />
        <select
          value={memberPosition}
          onChange={(e) => setMemberPosition(e.target.value)}
          className="border rounded px-4 py-2 w-full mb-2"
        >
          <option value="">--- Select Position ---</option>
          <option value="PostDoc">PostDoc</option>
          <option value="PhD">PhD</option>
          <option value="BTech">BTech</option>
          <option value="MTech">MTech</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          placeholder="About"
          value={memberAbout}
          onChange={(e) => setMemberAbout(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none h-32 mb-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setMemberImg(e.target.files[0])}
          className="border rounded mb-2 p-2 text-white"
        />
        <button
          onClick={handleAddMember}
          className="bg-blue-500 text-white px-8 py-2 rounded mx-4 hover:bg-blue-600"
        >
          Add Member
        </button>
      </div>

      {/* Member List Table */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
          <th className="p-4 border-b">Image</th>
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Position</th>
            <th className="p-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((member) => (
            <tr key={member._id} className="hover:bg-gray-50 border-b">
                <td className="p-4">
                <img
                  src={`data:image/jpeg;base64,${member.img?.toString('base64')}`}
                  alt={member.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </td>
              <td className="p-4 font-semibold">{member.name}</td>
              <td className="p-4 font-bold">{member.position}</td>
              <td className="p-4 w-24 ">
                <div className="flex justify-center h-full space-x-4">
                <FaEdit
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleUpdateMember(member._id)}
                  title="Update member"
                />
                <FaTrashAlt
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteClick(member._id)}
                  title="Delete member"
                /></div>
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
            <p>Do you want to delete this member?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={confirmDeleteMember}
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

export default MemberPage;
