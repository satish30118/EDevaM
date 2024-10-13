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
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4 bg-gray-600 h-screen overflow-y-auto hide-scrollbar">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
