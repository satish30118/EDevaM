"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('');

  // This function can be used to set the active tab when a link is clicked
  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <aside className="bg-gray-800 text-gray-300 w-64 min-h-screen px-2 py-6">
      <ul className='font-bold '>
        <div className='pl-2'>
          <div className='pb-2 text-red-300'>Home Page</div>
          <ul>
            <li className={`mb-1 mr-2 hover:bg-gray-950 ${activeTab === 'slider' ? 'bg-gray-950' : ''}`} onClick={() => handleSetActiveTab('slider')}>
              <Link href="/admin/home/slider" className="block px-6 py-3">Slider</Link>
            </li>
            <li className={`mb-1 mr-2 hover:bg-gray-950 ${activeTab === 'gallery' ? 'bg-gray-950' : ''}`} onClick={() => handleSetActiveTab('gallery')}>
              <Link href="/admin/home/gallery" className="block px-6 py-3">Gallery</Link>
            </li>
            <li className={`mb-1 mr-2 hover:bg-gray-950 ${activeTab === 'news' ? 'bg-gray-950' : ''}`} onClick={() => handleSetActiveTab('news')}>
              <Link href="/admin/home/news" className="block px-6 py-3">News</Link>
            </li>
          </ul>
        </div>
        <div className='pl-2 py-3'>
          <div className='pb-2 text-red-300'>Publication Page</div>
          <ul>
            <li className={`mb-1 mr-2 hover:bg-gray-950 ${activeTab === 'publications' ? 'bg-gray-950' : ''}`} onClick={() => handleSetActiveTab('publications')}>
              <Link href="/admin/publications" className="block px-6 py-3">Publications</Link>
            </li>
          </ul>
        </div>
        <div className='pl-2 py-3'>
          <div className='pb-2 text-red-300'>Peoples Page</div>
          <ul>
            <li className={`mb-1 mr-2 hover:bg-gray-950 ${activeTab === 'alumni' ? 'bg-gray-950' : ''}`} onClick={() => handleSetActiveTab('alumni')}>
              <Link href="/admin/peoples/alumni" className="block px-6 py-3">Alumni</Link>
            </li>
            <li className={`mb-1 mr-2 hover:bg-gray-950 ${activeTab === 'current-member' ? 'bg-gray-950' : ''}`} onClick={() => handleSetActiveTab('current-member')}>
              <Link href="/admin/peoples/current-member" className="block px-6 py-3">Current Member</Link>
            </li>
          </ul>
        </div>
        <div className='pl-2 py-3'>
          <div className='pb-2 text-red-300'>Awards/Achievements Page</div>
          <ul>
            <li className={`mb-1 mr-2 hover:bg-gray-950 ${activeTab === 'awards' ? 'bg-gray-950' : ''}`} onClick={() => handleSetActiveTab('awards')}>
              <Link href="/admin/awards" className="block px-6 py-3">Awards</Link>
            </li>
          </ul>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
