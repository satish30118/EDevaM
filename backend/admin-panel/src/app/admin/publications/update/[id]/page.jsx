"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const UpdatePublicationPage = ({params}) => {
  const [publicationContent, setPublicationContent] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = params// Get the publication ID from the query parameters

  // Fetch the publication details when the component mounts
  useEffect(() => {
    if (id) {
      fetchPublication();
    }
  }, [id]);

  // Fetch the publication data by ID
  const fetchPublication = async () => {
    try {
      const response = await axios.get(`/api/publication/${id}`);
      const { content, year } = response.data; // Adjust based on your API response structure
      setPublicationContent(content);
      setPublicationYear(year);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching publication:", error);
      toast.error("Error fetching publication!");
    }
  };

  // Handle updating the publication
  const handleUpdatePublication = async () => {
    if (publicationContent.trim() && publicationYear) {
      try {
        const updatedPublication = {
          content: publicationContent,
          year: publicationYear,
        };

        await axios.put(`/api/publication/${id}`, updatedPublication);
        setTimeout(() => {
            toast.success("Publication updated successfully!");
        }, 500);
        router.push("/admin/publications"); // Redirect to the publication list page
      } catch (error) {
        console.error("Error updating publication:", error);
        toast.error("Error updating publication!");
      }
    } else {
      toast.warn("Enter content and year!");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="px-3">
      <ToastContainer />
      
      <h1 className="text-2xl font-bold text-center mb-4 text-white">Update Publication</h1>
      
      {/* Update Publication Form */}
      <div className="mb-6">
        <textarea
          placeholder="Publication content"
          value={publicationContent}
          onChange={(e) => setPublicationContent(e.target.value)}
          className="border rounded px-4 py-2 w-full outline-none h-32 mb-2"
        />
        <input
          type="number"
          placeholder="Publication year"
          value={publicationYear}
          onChange={(e) => setPublicationYear(e.target.value)}
          className="border outline-none rounded text-black px-4 py-2 w-full mb-2"
        />
        <button
          onClick={handleUpdatePublication}
          className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600"
        >
          Update Publication
        </button>
      </div>
    </div>
  );
};

export default UpdatePublicationPage;
