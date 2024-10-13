"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateMemberPage = ({params}) => {
  const [memberData, setMemberData] = useState(null);
  const [memberName, setMemberName] = useState("");
  const [memberImg, setMemberImg] = useState("");
  const [memberAbout, setMemberAbout] = useState("");
  const [memberAlumni, setMemberAlumni] = useState(true);
  const [memberPosition, setMemberPosition] = useState("PostDoc");
  const router = useRouter();
  const { id } = params;

  // Fetch member data for the provided ID
  useEffect(() => {
    const fetchMemberData = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/people/${id}`);
          setMemberData(response.data);
          setMemberName(response.data.name);
          setMemberAbout(response.data.about);
          setMemberPosition(response.data.position);
        } catch (error) {
          console.error("Error fetching member data:", error);
        }
      }
    };
    fetchMemberData();
  }, [id]);

  // Handle updating a member
  const handleUpdateMember = async () => {
    if (memberName.trim() && memberAbout.trim()) {
      try {
        const formData = new FormData();
      formData.append("img", memberImg);
      formData.append("name", memberName);
      formData.append("about", memberAbout);
      formData.append("position", memberPosition);
      formData.append("alumni", memberAlumni);


        await axios.put(`/api/people/${id}`, formData);
        setTimeout(() => {           
            toast.success("Member updated successfully!");
        }, 500);
        router.push('/admin/peoples/alumni');
      } catch (error) {
        console.error("Error updating member:", error);
        toast.error("Error updating member!");
      }
    } else {
      toast.warn("Enter name and about!");
    }
  };

  if (!memberData) return <p>Loading...</p>;

  return (
    <div className="px-3">
      <ToastContainer />
      
      <h1 className="text-2xl font-bold text-center mb-4 text-white">Update Member</h1>
      
      <input
        type="text"
        placeholder="Member name"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        className="border rounded px-4 py-2 w-full mb-2"
      />
      <textarea
        placeholder="About the member"
        value={memberAbout}
        onChange={(e) => setMemberAbout(e.target.value)}
        className="border rounded px-4 py-2 w-full h-32 mb-2"
      />
      <select
        value={memberPosition}
        onChange={(e) => setMemberPosition(e.target.value)}
        className="border rounded px-4 py-2 w-full mb-2"
      >
        <option value="">--- Select Position ---</option>
        <option value="PostDoc">PostDoc</option>
        <option value="PhD">PhD</option>
        <option value="BTech">BTech</option>
        <option value="MTech">MTech</option>
        <option value="Intern">Intern</option>
        <option value="Other">Other</option>
      </select>
      <input
          type="file"
          accept="image/*"
          onChange={(e) => setMemberImg(e.target.files[0])}
          className="border rounded mb-2 p-2 w-full text-white my-2"
        />
        <label className="inline-flex items-center mb-2 ml-3">
        <input
          type="checkbox"
          checked={!memberAlumni}
          onChange={(e) => setMemberAlumni(!memberAlumni)}
          className="form-checkbox"
        />
        <span className="ml-2 text-white font-bold ">Make Current Member</span>
      </label>
      <button
        onClick={handleUpdateMember}
        className="bg-blue-500 text-white px-8 py-2 my-3 w-full rounded hover:bg-blue-600"
      >
        Update Member
      </button>
    </div>
  );
};

export default UpdateMemberPage;
