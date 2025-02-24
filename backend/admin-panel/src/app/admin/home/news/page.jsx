"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get("/api/home/news/");
      setNewsList(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleAddNews = async () => {
    if (newsTitle.trim() && newsContent.trim()) {
      try {
        const newNews = { title: newsTitle, content: newsContent };
        await axios.post("/api/home/news/", newNews);
        
        // Clear form after adding news
        setNewsTitle("");
        setNewsContent("");
        toast.success("News added successfully!");
        fetchNews();
      } catch (error) {
        console.error("Error adding news:", error);
        toast.error("Error adding news!");
      }
    } else {
      toast.warn("Enter title and content!");
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
  };

  const confirmDeleteNews = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`/api/home/news/${deleteId}`);
      setDeleteId(null);
      fetchNews();
      toast.success("News deleted successfully!");
    } catch (error) {
      console.error("Error deleting news:", error);
      toast.error("Error deleting news!");
    }
  };

  const handleUpdateNews = (id) => {
    router.push(`/admin/home/news/update/${id}`);
  };

  return (
    <div className="p-3 bg-gray-800 min-h-screen">
      <ToastContainer />

      <h1 className="text-2xl font-bold text-center mb-4 text-white">News Management</h1>

      {/* Add New News Section */}
      <div className="bg-gray-900 p-5 rounded-lg shadow-lg mb-6">
        <input
          type="text"
          placeholder="News Title"
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none mb-2 bg-gray-800 text-white"
        />
        <textarea
          placeholder="News Content"
          value={newsContent}
          onChange={(e) => setNewsContent(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none h-32 mb-2 bg-gray-800 text-white"
        />
        <button
          onClick={handleAddNews}
          className="bg-green-600 mx-6 my-3 text-white px-4 py-2 rounded inline-flex items-center justify-center hover:bg-green-700 transition duration-300"
        >
          <FaPlus className="mr-2" /> Add News
        </button>
      </div>

      {/* News List Table */}
      <table className="min-w-full bg-gray-800 border border-gray-700 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-left">
            <th className="p-4 border-b text-white">Title</th>
            <th className="p-4 border-b text-white">Content</th>
            <th className="p-4 border-b text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news) => (
            <tr key={news._id} className="hover:bg-gray-600 border-b border-gray-700">
              <td className="p-4 font-semibold text-white">{news.title}</td>
              <td className="p-4 text-white">{news.content}</td>
              <td className="p-4 w-24">
                <div className="flex justify-center h-full space-x-4">
                  <FaEdit
                    className="text-yellow-400 cursor-pointer hover:text-yellow-500 transition-colors"
                    onClick={() => handleUpdateNews(news._id)}
                    title="Update news"
                  />
                  <FaTrashAlt
                    className="text-red-400 cursor-pointer hover:text-red-500 transition-colors"
                    onClick={() => handleDeleteClick(news._id)}
                    title="Delete news"
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
            <h2 className="text-xl font-bold mb-4 text-white">Are you sure?</h2>
            <p className="text-white">Do you want to delete this news?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                onClick={confirmDeleteNews}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                onClick={() => setDeleteId(null)}
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

export default NewsPage;
