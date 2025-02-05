// import React from "react";
// import Navbar from "./components/navbar";

// const App = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       <Navbar />
//       <div className="pt-[80px]"> {/* Add padding here to offset the fixed navbar */}
//         <div className="text-center">
//           <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
//           <p className="mt-4 text-lg">Explore AI-powered trading and analytics.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

