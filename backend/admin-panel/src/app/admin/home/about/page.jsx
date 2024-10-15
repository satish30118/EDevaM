"use client"
import axios from 'axios';
import { useState } from 'react';

const AboutForm = ({ onSubmit }) => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState({
    labName: '',
    aboutContent: '',
    email: '',
    mobile: '',
    insta: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    address: '',
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('labName', formData.labName);
    form.append('aboutContent', formData.aboutContent);
    form.append('email', formData.email);
    form.append('mobile', formData.mobile);
    form.append('insta', formData.insta);
    form.append('twitter', formData.twitter);
    form.append('facebook', formData.facebook);
    form.append('linkedin', formData.linkedin);
    form.append('address', formData.address);
    if (image) {
      form.append('image', image);
    }
    onSubmit(form);
  };

  return (
    <form className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Lab Name</label>
        <input
          type="text"
          name="labName"
          value={formData.labName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter lab name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">About Content</label>
        <textarea
          name="aboutContent"
          value={formData.aboutContent}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter about content"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Mobile</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter mobile number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Image Upload</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter address"
        />
      </div>

      {/* Social Media Links */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Instagram</label>
          <input
            type="url"
            name="insta"
            value={formData.insta}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Instagram link"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Twitter</label>
          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Twitter link"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Facebook</label>
          <input
            type="url"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Facebook link"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="LinkedIn link"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default AboutForm;
