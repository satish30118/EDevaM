"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaImages, FaTrashAlt, FaUpload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  const fetchImages = async () => {
    const { data } = await axios.get("/api/home/gallery/");
    setGalleryImages(data);
    console.log(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

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
      toast.success("Image uploaded successfully!"); // Show success toast
      setSelectedFile(null);
      fetchImages(); // Refresh images after adding
    } catch (error) {
      toast.error("Error uploading image!"); // Show error toast if upload fails
      console.error("Error uploading image:", error);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`/api/home/gallery/${id}`);
      toast.success("Image deleted successfully!"); // Show success toast for deletion
      fetchImages(); // Refresh images after deleting
    } catch (error) {
      toast.error("Error deleting image!"); // Show error toast if deletion fails
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
    <ToastContainer />
    <h2 className="text-3xl font-bold mb-6 text-white text-center">
      <FaImages className="inline-block mr-2" />
      Slider Management
    </h2>
    <form onSubmit={handleAddImage} className="m-4 flex items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border rounded p-2 mb-2 text-white bg-gray-700"
        required
      />
      <button type="submit" className="bg-blue-600 ml-4 text-white rounded p-2 px-4 hover:bg-blue-700 transition duration-200 flex items-center">
        <FaUpload className="mr-2" /> Upload New Image
      </button>
    </form>

      
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border p-2">Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {galleryImages?.map((img) => (
            <tr key={img._id}>
              <td className="p-4 border-b">
                <img
                  src={`data:image/jpeg;base64,${img.imageData?.toString("base64")}`}
                  alt={"gallery img"}
                  className="w-48 h-16 object-cover"
                />
              </td>
              <td className="border p-2 text-center w-24">
                <FaTrashAlt
                  className="text-red-500 cursor-pointer mx-auto"
                  onClick={() => handleDeleteImage(img._id)} // Call handleDeleteImage with the ID of the image
                  title="Delete image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryPage;
