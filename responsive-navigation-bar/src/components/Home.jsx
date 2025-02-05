import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-600 to-green-500">
      <div className="bg-gray-900 p-6 rounded-lg text-white text-center shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Welcome 🎉</h2>
        <p className="mb-4 text-lg">You have successfully signed in!</p>
        <button
          className="bg-red-500 hover:bg-red-600 p-2 px-4 rounded transition duration-200"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
