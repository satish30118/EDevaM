"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

const SliderPage = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  const fetchImages = async () => {
    const {data} = await axios.get('/api/home/slider/');
    setImages(data);
    console.log(data)
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
    formData.append('image', selectedFile);

    await axios.post('/api/home/slider', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setSelectedFile(null);
    fetchImages(); // Refresh images after adding
  };

  const handleDeleteImage = async (id) => {
    await axios.delete(`/api/home/slider/${id}`);
    fetchImages(); // Refresh images after deleting
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Slider Management</h2>
      <form onSubmit={handleAddImage} className="mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border rounded p-2 mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 ml-4 text-white rounded p-2 px-4">
         Upload New Image
        </button>
      </form>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-600">
            <th className="border p-2">Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {images?.map((img) => (
            <tr key={img._id}>
              <td className="border p-2">
                <img src={`${img.imageData}`} alt="Slider" className="w-32 h-20 object-cover" />
              </td>
              <td className="border p-2">
                <button
                  onClick={() => handleDeleteImage(img._id)}
                  className="bg-red-500 text-white rounded px-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default SliderPage;
