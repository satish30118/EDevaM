// app/layout.jsx
import './globals.css';
import { AuthProvider } from './context/AuthContext';

export const metadata = {
  title: 'Admin Panel',
  description: 'Admin Panel for managing the website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
