// app/layout.jsx
import './globals.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Admin Panel',
  description: 'Admin Panel for managing the website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
}
