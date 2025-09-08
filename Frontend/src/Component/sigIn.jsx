import React, { useState } from "react";
import axios from "axios";
import Image from "../img/StoreBooks.jpg";
import { useNavigate } from "react-router-dom";



function SignIn() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/signIn/add", {
        fullname,
        email,
        password,
      });
      alert(response.data.message);
      nav("/");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ backgroundColor: "#efefef", minHeight: "100vh", padding: "12px 12px" }}>
      <div style={{ display: "flex", width: "100%", gap: "20px" }}>
        {/* Left image */}
        <div style={{ width: "50%", height: "100vh", position: "relative" }}>
          <img src={Image} alt="Book Store" style={{ width: "100%", height: "100%", borderRadius: "8px", objectFit: "cover" }} />
        </div>

        {/* Right side form */}
        <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px" }}>
          <h2>Create your Account</h2>
          <form onSubmit={handleSignUp} style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" style={{ padding: "12px", backgroundColor: "#d42346", color: "white", border: "none", borderRadius: "6px" }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
