import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";

export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const verifyOtp = () => {
    if (otp.length !== 6) {
      alert("Enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    const confirmationResult = window.confirmationResult;

    confirmationResult
      .confirm(otp)
      .then(() => {
        setLoading(false);
        navigate("/home");
      })
      .catch((error) => {
        console.error("OTP Verification Error:", error);
        alert("Invalid OTP. Try again.");
        setLoading(false);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-600 to-orange-400">
      <div className="bg-gray-900 p-6 rounded-lg text-white w-96 shadow-lg">
        <h2 className="text-2xl mb-4 text-center font-semibold">Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          className="w-full p-2 mb-2 rounded bg-gray-800 focus:ring-2 focus:ring-pink-400 text-center"
          maxLength={6}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          className="w-full flex items-center justify-center bg-pink-500 hover:bg-pink-600 p-2 rounded mt-2 transition duration-200"
          onClick={verifyOtp}
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></div>
          ) : (
            "Verify OTP"
          )}
        </button>
      </div>
    </div>
  );
}
