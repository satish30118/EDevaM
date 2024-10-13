"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'; // Import useRouter

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const UpdateNews = ({ params }) => {
  const { id } = params; // Destructure the `id` from `params`
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const router = useRouter(); // Initialize router


  // Fetch the news details when the component mounts
  useEffect(() => {
    if (id) {
      fetchNewsData();
    }
  }, [id]); // Run the effect when `id` is available

  // Fetch news data by ID
  const fetchNewsData = async () => {
    try {
      const response = await axios.get(`/api/home/news/${id}`);
      setNewsTitle(response.data.title);
      setNewsContent(response.data.content);
    } catch (error) {
      console.error("Error fetching news:", error);
      toast.error("Error fetching news data!");
    }
  };

  // Handle updating the news
  const handleUpdate = async () => {
    if (newsTitle.trim() && newsContent.trim()) {
      try {
        const updatedNews = {
          title: newsTitle,
          content: newsContent,
        };

        await axios.put(`/api/home/news/${id}`, updatedNews);
        setTimeout(() => {
          toast.success("News updated successfully!");
        }, 500);
        // Optionally, redirect back to the news management page after update
        router.push(`/admin/home/news`); 
      } catch (error) {
        console.error("Error updating news:", error);
        toast.error("Error updating news!");
      }
    } else {
      toast.warn("Both title and content are required!");
    }
  };

  // Show a loading state or some placeholder content until `id` is available
  if (!id) return <p>Loading...</p>;

  return (
    <div className="px-3">
      <ToastContainer />
      
      <h1 className="text-2xl font-bold text-center mb-4">Update News</h1>
      
      <div className="mb-6">
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
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600"
        >
          Update News
        </button>
      </div>
    </div>
  );
};

export default UpdateNews;
