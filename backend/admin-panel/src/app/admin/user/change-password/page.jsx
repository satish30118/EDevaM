"use client";

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaKey } from "react-icons/fa";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const PasswordChangePage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if(!oldPassword && !newPassword && !confirmPassword){
        return  toast.warn("Enter all data!");
    }
    if (newPassword !== confirmPassword) {
      toast.warn("New passwords do not match!");
      return;
    }

    try {
      await axios.post("/api/change-password", {
        oldPassword,
        password: newPassword,
      });

      toast.success("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Error changing password!");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-white mt-10 mb-6 flex items-center"><FaKey className="mr-4 text-gray-400" />Change Your Password</h1>

      <div className="bg-gray-900 shadow-lg rounded-lg px-10 pt-8 pb-10 mb-8 w-full max-w-md">
        <div className="mb-6">
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="border rounded-lg px-4 py-3 w-full outline-none mb-4 focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border rounded-lg px-4 py-3 w-full outline-none mb-4 focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded-lg px-4 py-3 w-full outline-none mb-6 focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <button
          onClick={handleChangePassword}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default PasswordChangePage;
