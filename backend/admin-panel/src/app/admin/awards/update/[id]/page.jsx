"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const UpdateAwardPage = ({params}) => {
  const router = useRouter();
  const { id } = params; // Get the award ID from the URL
  const [awardContent, setAwardContent] = useState("");
  const [awardYear, setAwardYear] = useState("");
  
  // Fetch award data when the component mounts
  useEffect(() => {
    if (id) {
      fetchAwardData();
    }
  }, [id]);

  // Fetch specific award data from the API
  const fetchAwardData = async () => {
    try {
      const response = await axios.get(`/api/awards/${id}`); // Adjust the API endpoint
      const { content, year } = response.data;
      setAwardContent(content);
      setAwardYear(year);
    } catch (error) {
      console.error("Error fetching award data:", error);
      toast.error("Error fetching award data!");
    }
  };

  // Handle updating the award
  const handleUpdateAward = async () => {
    if (awardContent.trim() && awardYear.trim()) {
      try {
        const updatedAward = {
          content: awardContent,
          year: awardYear,
        };

        await axios.put(`/api/awards/${id}`, updatedAward); // Adjust the API endpoint
        toast.success("Award updated successfully!");
        router.push('/admin/awards'); // Redirect back to the awards page
      } catch (error) {
        console.error("Error updating award:", error);
        toast.error("Error updating award!");
      }
    } else {
      toast.warn("Enter content and year!");
    }
  };

  return (
    <div className="px-3">
      <ToastContainer />
      
      <h1 className="text-2xl font-bold text-center mb-4 text-white">Update Award</h1>

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
          onClick={handleUpdateAward}
          className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600"
        >
          Update Award
        </button>
      </div>
    </div>
  );
};

export default UpdateAwardPage;
