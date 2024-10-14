"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
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
    <div className="p-4">
      <ToastContainer /> {/* Include ToastContainer to render the toasts */}
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Slider Management</h2>
      <form onSubmit={handleAddImage} className="m-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border rounded p-2 mb-2 text-white"
          required
        />
        <button type="submit" className="bg-blue-500 ml-4 text-white rounded p-2 px-4">
          Upload New Image
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
          {images?.map((img) => (
            <tr key={img._id}>
              <td className="p-4 border-b">
                <img
                  src={`data:image/jpeg;base64,${img.imageData?.toString('base64')}`}
                  alt={"slider img"}
                  className="w-48 h-16 object-cover"
                />
              </td>
              <td className="border p-2 text-center w-24">
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
