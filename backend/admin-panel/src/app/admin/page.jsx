export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-gray-900 shadow-lg rounded-lg p-10  text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Admin Panel</h1>
        <p className="text-gray-500 mb-6">
          Manage your application efficiently and effectively with our powerful tools.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
