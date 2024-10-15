"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const UserManagementPage = () => {
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUserList(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = async () => {
    if (userName.trim() && userEmail.trim() && userPassword.trim() && userId.trim()) {
      try {
        await axios.post("/api/users/register", {
          name: userName,
          email: userEmail,
          password: userPassword,
          userId: userId,
        });
        setUserName("");
        setUserEmail("");
        setUserPassword("");
        setUserId("");
        toast.success("User added successfully!");
        fetchUsers();
      } catch (error) {
        console.error("Error adding user:", error);
        toast.error("Error adding user!");
      }
    } else {
      toast.warn("Enter all fields!");
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
  };

  const confirmDeleteUser = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`/api/users/${deleteId}`);
      setDeleteId(null);
      fetchUsers();
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user!");
    }
  };

  const handleUpdateUser = (id) => {
    router.push(`/admin/users/update/${id}`);
  };

  return (
    <div className="px-3 py-4 bg-gray-800 min-h-screen">
      <ToastContainer />

      <h1 className="text-3xl font-bold text-center text-white mb-4">User Management</h1>

      {/* Add New User Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-white mb-4">Add New User</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border border-gray-700 rounded px-4 py-2 w-full bg-gray-800 text-white outline-none"
            />
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border border-gray-700 rounded px-4 py-2 w-full bg-gray-800 text-white outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="border border-gray-700 rounded px-4 py-2 w-full bg-gray-800 text-white outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="border border-gray-700 rounded px-4 py-2 w-full bg-gray-800 text-white outline-none"
            />
          </div>
          <button
            onClick={handleAddUser}
            className="bg-green-600 text-white px-4 py-2 w-1/3 rounded flex items-center justify-center hover:bg-green-700 transition duration-300"
          >
            <FaPlus className="mr-2" /> Add User
          </button>
        </div>
      </div>

      {/* User List Table */}
      <table className="min-w-full bg-gray-800 border border-gray-700 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-white text-left">
            <th className="p-4">User ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user._id} className="hover:bg-gray-600 border-b border-gray-700">
              <td className="p-4 font-semibold text-white">{user.userId}</td>
              <td className="p-4 font-semibold text-white">{user.name}</td>
              <td className="p-4 font-semibold text-white">{user.email}</td>
              <td className="p-4 font-bold text-white">{user.role}</td>
              <td className="p-4 w-24">
                <div className="flex justify-center space-x-4">
                  {/* <FaEdit
                    className="text-blue-400 cursor-pointer"
                    onClick={() => handleUpdateUser(user._id)}
                    title="Update user"
                  /> */}
                  <FaTrashAlt
                    className="text-red-400 cursor-pointer"
                    onClick={() => handleDeleteClick(user._id)}
                    title="Delete user"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Deletion Confirmation Popup */}
      {deleteId != null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold text-white mb-4">Are you sure?</h2>
            <p className="text-white">Do you want to delete this user?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={confirmDeleteUser}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
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

export default UserManagementPage;
