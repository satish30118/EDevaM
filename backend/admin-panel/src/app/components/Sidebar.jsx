// components/Sidebar.jsx
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-gray-300 w-64 min-h-screen px-2 py-6">
      <ul className='font-bold '>
        <div className='pl-2'>
            <div className='pb-2 text-red-300'>Home Page</div>
            <ul>
            <li className="mb-1 mr-2 hover:bg-gray-950 px-6 py-3"><Link href="/admin/home/slider">Slider</Link></li>
            <li className="mb-1 mr-2 hover:bg-gray-950 px-6 py-3"><Link href="/admin/home/gallery">Gallery</Link></li>
            <li className="mb-1 mr-2 hover:bg-gray-950 px-6 py-3"><Link href="/admin/home/news">News</Link></li>
            </ul>
        </div>
        <div className='pl-2 py-3'>
            <div className='pb-2 text-red-300'>Publication Page</div>
            <ul>
                <li className="mb-1 mr-2 hover:bg-gray-950 px-6 py-3"><Link href="/admin/publications">Publications</Link></li>
            </ul>
        </div> 
        <div className='pl-2 py-3'>
            <div className='pb-2 text-red-300'>Peoples Page</div>
            <ul>
                <li className="mb-1 mr-2 hover:bg-gray-950 px-6 py-3"><Link href="/admin/peoples/alumni">Alumni</Link></li>
                <li className="mb-1 mr-2 hover:bg-gray-950 px-6 py-3"><Link href="/admin/peoples/current-member">Current Member</Link></li>
            </ul>
        </div>
        <div className='pl-2 py-3'>
            <div className='pb-2 text-red-300'>Awards/Achievements Page</div>
            <ul>
                <li className="mb-1 mr-2 hover:bg-gray-950 px-6 py-3"><Link href="/admin/awards">Awards</Link></li>
            </ul>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
