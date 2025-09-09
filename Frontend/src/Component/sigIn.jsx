import React, { useState } from "react";
import axios from "axios";
import { TbCircleDashedLetterB } from "react-icons/tb";
import Image from "../img/NightBook.jpg";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/signIn/add",
        {
          fullname,
          email,
          password,
        }
      );
      alert(response.data.message);
      nav("/");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#700502ff",
        minHeight: "100vh",
        // padding: "12px 12px",
      }}
    >
      <div style={{ display: "flex", width: "100%", gap: "20px" }}>
        {/* Left image */}
        <div style={{ width: "50%", height: "100vh", position: "relative" }}>
          <img
            src={Image}
            alt="Book Store"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "8%",
              left: "5%",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            }}
          >
            {/* Tagline */}
           <div style={{display: 'flex', alignItems:'center', gap:'20px' }}>
             <span  style={{ marginTop: "20px", fontSize: "22px", maxWidth: "400px",  }}>
              <TbCircleDashedLetterB style={{ fontSize: "50px" }} />
            </span>
            <span
              style={{ marginTop: "20px", fontSize: "22px", maxWidth: "400px",  }}
            >
              Discover a world of stories, knowledge, and imagination at our
              bookstore.
            </span>
           </div>
          </div>
        </div>

        {/* Right side form */}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <h2>Create your Account</h2>
          <form
            onSubmit={handleSignUp}
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                backgroundColor: "#000",
                color: "white",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
