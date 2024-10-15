"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaImages, FaTrashAlt, FaUpload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  // Fetch gallery images
  const fetchImages = async () => {
    try {
      const { data } = await axios.get("/api/home/gallery/");
      setGalleryImages(data);
    } catch (error) {
      toast.error("Error fetching images!");
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle file input change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle image upload
  const handleAddImage = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("img", selectedFile);

    try {
      await axios.post("/api/home/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Image uploaded successfully!");
      setSelectedFile(null);
      fetchImages();
    } catch (error) {
      toast.error("Error uploading image!");
      console.error("Error uploading image:", error);
    }
  };

  // Handle image deletion
  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`/api/home/gallery/${id}`);
      toast.success("Image deleted successfully!");
      fetchImages();
    } catch (error) {
      toast.error("Error deleting image!");
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="p-3 bg-gray-800">
      <ToastContainer />

      {/* Header Section */}
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        <FaImages className="inline-block mr-2" />Gallery Management
      </h2>

      {/* Upload Form Section */}
      <form onSubmit={handleAddImage} className="bg-gray-800 p-5 rounded-xl shadow-lg mb-6 flex items-center justify-between space-x-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border rounded px-4 py-2 bg-gray-700 text-white focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 flex items-center"
        >
          <FaUpload className="mr-2" /> Upload New Image
        </button>
      </form>

      {/* Gallery Table Section */}
      <table className="min-w-full bg-gray-800 border border-gray-700 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-left">
            <th className="p-4 border-b text-white">Image</th>
            <th className="p-4 border-b text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {galleryImages?.map((img) => (
            <tr key={img._id} className="hover:bg-gray-600 border-b border-gray-700">
              <td className="p-4">
                <img
                  src={`data:image/jpeg;base64,${img.imageData?.toString("base64")}`}
                  alt="gallery img"
                  className="w-48 h-20 object-cover rounded"
                />
              </td>
              <td className="p-4 w-24">
                <div className="flex justify-center h-full">
                  <FaTrashAlt
                    className="text-red-500 cursor-pointer hover:text-red-600 transition-colors"
                    onClick={() => handleDeleteImage(img._id)}
                    title="Delete image"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryPage;
