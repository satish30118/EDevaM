"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
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
      
      <h1 className="text-3xl font-bold text-center mb-6 text-white">News Management</h1>
      
      <div className="mb-6 bg-white p-4 rounded shadow-md">
        <input
          type="text"
          placeholder="News title"
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
          className="border outline-none rounded text-black px-4 py-2 w-full mb-2"
        />
        <textarea
          placeholder="News content"
          value={newsContent}
          onChange={(e) => setNewsContent(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none h-32 mb-2"
        />
        <button
          onClick={handleAddNews}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Add News
        </button>
      </div>
      
      <table className="min-w-full bg-white rounded shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4 border-b">News Title</th>
            <th className="p-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news) => (
            <tr key={news.id} className="hover:bg-gray-50 border-b">
              <td className="p-4">
                <strong className="text-lg text-gray-800">{news.title}</strong>
                <p className="text-gray-600">{news.content}</p>
              </td>
              <td className="p-4 w-24">
                <div className="flex justify-center h-full space-x-4">
                  <FaEdit
                    className="text-blue-600 cursor-pointer hover:text-blue-700 transition duration-200"
                    onClick={() => handleUpdateNews(news._id)}
                    title="Update news"
                  />
                  <FaTrashAlt
                    className="text-red-600 cursor-pointer hover:text-red-700 transition duration-200"
                    onClick={() => handleDeleteClick(news._id)}
                    title="Delete news"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deleteId != null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p>Do you want to delete this news?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                onClick={confirmDeleteNews}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
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
