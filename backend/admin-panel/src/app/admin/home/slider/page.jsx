"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaImages, FaTrashAlt, FaUpload } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const SliderPage = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  const fetchImages = async () => {
    const { data } = await axios.get('/api/home/slider/');
    setImages(data);
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
    formData.append('img', selectedFile);

    try {
      await axios.post('/api/home/slider', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
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

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`/api/home/slider/${id}`);
      toast.success("Image deleted successfully!"); // Show success toast for deletion
      fetchImages(); // Refresh images after deleting
    } catch (error) {
      toast.error("Error deleting image!"); // Show error toast if deletion fails
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="p-3 bg-gray-800 ">
    <ToastContainer />
    <h2 className="text-3xl font-bold mb-6 text-white text-center">
      <FaImages className="inline-block mr-2" />
      Slider Management
    </h2>
    <form onSubmit={handleAddImage} className="bg-gray-800 p-3 rounded-xl shadow-lg mb-6 flex items-center justify-between space-x-4">
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


      <table className="min-w-full bg-gray-800 border border-gray-700 shadow-xl rounded-lg">
        <thead>
          <tr className="bg-gray-700 text-left">
            <th className="p-4 border-b text-white">Image</th>
            <th className="p-4 border-b text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {images?.map((img) => (
            <tr key={img._id} className='hover:bg-gray-600 border-b border-gray-700'>
              <td className="p-4">
                <img
                  src={`data:image/jpeg;base64,${img.imageData?.toString('base64')}`}
                  alt={"slider img"}
                  className="w-48 h-16 object-cover"
                />
              </td>
              <td className="border-l border-gray-600 p-2 text-center w-24">
                <FaTrashAlt
                  className="text-red-500 cursor-pointer mx-auto"
                  onClick={() => handleDeleteClick(img._id)} // Correctly reference handleDeleteClick
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

export default SliderPage;
