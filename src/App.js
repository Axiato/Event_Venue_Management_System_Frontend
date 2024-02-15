import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import Login from "./pages/landing/Login";
import Signup from "./pages/landing/Signup";
import AuthLayout from "./layouts/AuthLayout";
import { Toaster } from "react-hot-toast";
import Phone from "./pages/landing/Phone";
import Otp from "./pages/landing/Otp";
import ProtectedRoute from "./components/ProtectedRoute";
import VeirfyEmail from "./pages/VerifyEmail";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LandingLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Landing />} />
            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="phone" element={<Phone />} />
              <Route path="otp" element={<Otp />} />
            </Route>
          </Route>
          <Route path="/verify-email" element={<VeirfyEmail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
