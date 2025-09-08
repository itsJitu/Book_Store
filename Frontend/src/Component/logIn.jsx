import React, { useState } from "react";
import axios from "axios";

// images
import Img from "../img/frontimg.jpg";

// Icons
import { TbCircleDashedLetterB } from "react-icons/tb";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { CiUnlock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function logIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/signIn/logIn",
        {
          email,
          password,
        }
      );

      // alert(response.data.message); // Login success message
      localStorage.setItem("token", response.data.token); // store JWT
      // console.log("User Data:", response.data.user);
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      {/* Login Page & Images*/}

      <div
        style={{
          display: "flex",
          backgroundColor: "#f7f7f7",
          height: "100vh",
          gap: "100px",
        }}
      >
        <div style={{ width: "50%" }}>
          <div style={{ padding: "24px" }}>
            <span>
              <TbCircleDashedLetterB style={{ fontSize: "50px" }} />
            </span>
            <br />

            {/* Bizzar Books */}
            <>
              <style>
                {`
                 @keyframes animateBackground {
                 from { background-position: 0 50%; }
                 to { background-position: 100% 50%; }
                }
              `}
              </style>

              <span
                style={{
                  fontFamily: "cursive",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "transparent",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1732535725600-f805d8b33c9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  backgroundSize: "200%",
                  backgroundPosition: "0 50%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "animateBackground 5s infinite alternate linear",
                  display: "inline-block",
                }}
              >
                Bizzar Books
              </span>
            </>
            <br />

            {/* Log In */}
            <div
              style={{
                marginTop: "20px",
                fontFamily: "cursive",
                fontSize: "22px",
                background: "linear-gradient(90deg, #605c64ff, #d42346ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              <h1>Log In</h1>
            </div>

            <br />
            {/* Email */}
            <div>
              <span>Email Address</span>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  gap: "20px",
                  backgroundColor: "#fff",
                  padding: "12px",
                  width: "100%",
                  borderRadius: "12px",
                }}
              >
                <MdOutlineLocalPostOffice />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: "none", outline: "none" }}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginTop: "15px" }}>
              <span>Password</span>
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  gap: "20px",
                  backgroundColor: "#fff",
                  padding: "12px",
                  width: "100%",
                  borderRadius: "12px",
                }}
              >
                <CiUnlock />
                <input
                  type="Password"
                  placeholder="•••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: "none", outline: "none" }}
                />
              </div>
            </div>

            {/* Checkbox & Remeber me */}
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <input type="checkbox" />
              <span style={{ font: "bold", display: "flex", gap: "15px" }}>
                Remember me
              </span>
            </div>

            {/* LogIn */}
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  width: "40%",
                  backgroundColor: "#0c0c0cff",
                  padding: "12px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={handleLogIn}
                  style={{
                    backgroundColor: "#0c0c0cff",
                    border: "none",
                    outline: "none",
                    color: "white",
                  }}
                >
                  Log In
                </button>
              </div>
            </div>

            {/* Sign up & Forgot Password */}
            <div style={{ marginTop: "20px" }}>
              <span>
                Don't have an account ?
                <b>
                  <Link
                    to="./sigIn"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "bold",
                    }}
                  >
                    {" "}
                    Sign up{" "}
                  </Link>
                  <br />
                  Forget Password
                </b>
              </span>
            </div>

            {/* icons */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "flex-start",
                width: "50%",
                gap: "20px",
                fontSize: "22px",
                alignItems: "center",
              }}
            >
              <a href="http://localhost:8080/auth/google/callback">
                <FcGoogle style={{ color: "red", fontSize: "24px" }} />
              </a>

              <button
                style={{
                  border: "none",
                  outline: "none",
                  padding: "12px",
                  backgroundColor: "#f7f7f7",
                  fontSize: "22px",
                }}
              >
                <FaGithub />
              </button>
              <button
                style={{
                  border: "none",
                  outline: "none",
                  padding: "12px",
                  backgroundColor: "#f7f7f7",
                  fontSize: "22px",
                }}
              >
                <FaFacebook
                  style={{ color: "#077aff", borderRadius: "50px" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* image & some text */}
        <div
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <img src={Img} alt="" style={{ width: "100vh" }} />
        </div>

        {/* Overlay text */}
        <div
          style={{
            position: "absolute",
            top: "15%", // adjust as needed
            left: "68%", // st as needed
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            padding: "12px",
          }}
        >
          <div style={{}}>
            <span>
              <TbCircleDashedLetterB style={{ fontSize: "50px" }} />
            </span>
            <br />
          </div>
          Welcome to Bizzar Books
          <div>
            <span>
              You can find here any kind of ebook. You can also discover, read,
              and enjoy your favorite books.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default logIn;
