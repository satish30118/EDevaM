"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaImage, FaNewspaper, FaBook, FaUsers, FaAward, FaGraduationCap, FaKey, FaUser, FaUserPlus } from "react-icons/fa"; // Importing new icons for user management

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <aside className="bg-gray-900 text-gray-200 w-64 px-4 font-inter">
      <div className='sticky top-0 h-16 bg-gray-900 z-30'></div>
      <ul className="font-semibold text-sm">
        {/* Home Section */}
        <div className="pl-2">
          <div className="pb-2 text-red-400 text-lg flex items-center">
            <FaHome className="mr-2 text-gray-400" /> Home Page
          </div>
          <ul>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "slider" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("slider")}
            >
              <Link href="/admin/home/slider" className="block px-6 py-3 flex items-center">
                <FaImage className="mr-2 text-gray-400" /> Slider
              </Link>
            </li>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "gallery" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("gallery")}
            >
              <Link href="/admin/home/gallery" className="block px-6 py-3 flex items-center">
                <FaImage className="mr-2 text-gray-400" /> Gallery
              </Link>
            </li>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "news" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("news")}
            >
              <Link href="/admin/home/news" className="block px-6 py-3 flex items-center">
                <FaNewspaper className="mr-2 text-gray-400" /> News
              </Link>
            </li>
          </ul>
        </div>

        {/* Publication Section */}
        <div className="pl-2 py-3">
          <div className="pb-2 text-red-400 text-lg flex items-center">
            <FaBook className="mr-2 text-gray-400" /> Publication Page
          </div>
          <ul>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "publications" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("publications")}
            >
              <Link href="/admin/publications" className="block px-6 py-3 flex items-center">
                <FaBook className="mr-2 text-gray-400" /> Publications
              </Link>
            </li>
          </ul>
        </div>

        {/* Peoples Section */}
        <div className="pl-2 py-3">
          <div className="pb-2 text-red-400 text-lg flex items-center">
            <FaUsers className="mr-2 text-gray-400" /> Peoples Page
          </div>
          <ul>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "current-member" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("current-member")}
            >
              <Link href="/admin/peoples/current-member" className="block px-6 py-3 flex items-center">
                <FaUsers className="mr-2 text-gray-400" /> Members
              </Link>
            </li>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "alumni" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("alumni")}
            >
              <Link href="/admin/peoples/alumni" className="block px-6 py-3 flex items-center">
                <FaGraduationCap className="mr-2 text-gray-400" /> Alumni
              </Link>
            </li>
          </ul>
        </div>

        {/* Awards Section */}
        <div className="pl-2 py-3">
          <div className="pb-2 text-red-400 text-lg flex items-center">
            <FaAward className="mr-2 text-gray-400" /> Awards/Achievements Page
          </div>
          <ul>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "awards" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("awards")}
            >
              <Link href="/admin/awards" className="block px-6 py-3 flex items-center">
                <FaAward className="mr-2 text-gray-400" /> Awards
              </Link>
            </li>
          </ul>
        </div>

        {/* User Settings Section */}
        <div className="pl-2 py-3">
          <div className="pb-2 text-red-400 text-lg flex items-center">
            <FaUser className="mr-2 text-gray-400" /> User Settings
          </div>
          <ul>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "change-password" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("change-password")}
            >
              <Link href="/admin/user/change-password" className="block px-6 py-3 flex items-center">
                <FaKey className="mr-2 text-gray-400" /> Change Password
              </Link>
            </li>
            <li
              className={`mb-1 mr-2 hover:bg-gray-700 rounded-lg transition duration-200 ${activeTab === "user-management" ? "bg-gray-700" : ""}`}
              onClick={() => handleSetActiveTab("user-management")}
            >
              <Link href="/admin/user/user-management" className="block px-6 py-3 flex items-center">
                <FaUsers className="mr-2 text-gray-400" /> User Management
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
