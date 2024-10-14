import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios  from 'axios'

export const metadata = {
  title: 'Admin Panel',
  description: 'Admin Panel for managing the website',
};

export default function RootLayout({ children }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  return (
    <html lang="en">
      <body className='h-screen'>
        <div className="flex">
          <div className='h-screen overflow-y-auto hide-scrollbar'>
          <Sidebar />
          </div>
          <main className="flex-1 bg-gray-800 h-screen overflow-y-auto hide-scrollbar">
            <div className='sticky top-0'><Navbar/></div>
            
            <div className="p-4">{children}</div>
            
          </main>
        </div>
      </body>
    </html>
  );
}
