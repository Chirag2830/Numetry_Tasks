import { useState, useEffect } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("Recaptcha verified!");
        },
      });
    }
  }, []);

  const requestOTP = () => {
    if (!phoneNumber.startsWith("+")) {
      alert("Enter a valid phone number with country code (e.g., +91 for India)");
      return;
    }

    setLoading(true);
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        navigate("/otp-verification");
      })
      .catch((error) => {
        console.error("OTP Request Error:", error);
        alert("Failed to send OTP. Try again.");
        setLoading(false);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-800 to-blue-600">
      <div className="bg-gray-900 p-6 rounded-lg text-white w-96 shadow-lg">
        <h2 className="text-2xl mb-4 text-center font-semibold">Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-2 mb-2 rounded bg-gray-800 focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-2 mb-2 rounded bg-gray-800 focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="text"
          placeholder="Phone Number (+CountryCode)"
          className="w-full p-2 mb-2 rounded bg-gray-800 focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          className="w-full flex items-center justify-center bg-purple-500 hover:bg-purple-600 p-2 rounded mt-2 transition duration-200"
          onClick={requestOTP}
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></div>
          ) : (
            "Get OTP"
          )}
        </button>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
