import React from "react";

// images


// Icons
import { TbCircleDashedLetterB } from "react-icons/tb";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { CiUnlock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import "./login.css";

function logIn() {
  return (
    <div>
      {/* Login Page & Images*/}

      <div style={{display:'flex', backgroundColor: "#f7f7f7", height:'100vh',}}>
        <div style={{ width:'100%' }}>
        <div style={{ padding: "24px", }}>
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

          {/* Sig In */}
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
            <h1>Sig In</h1>
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
                width: "40%",
                borderRadius:'12px'
              }}
            >
              <MdOutlineLocalPostOffice />
              <input
                type="email"
                placeholder="Enter Your Email"
                style={{ border: "none", outline: "none" }}
              />
            </div>
          </div>

          {/* Password */}
          <div style={{marginTop:'15px'}}>
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
                width: "40%",
                borderRadius:'12px'
              }} 
            >
              <CiUnlock />
              <input type="Password" placeholder="•••••••" style={{border:'none', outline:'none'}} />
            </div>
          </div>

          {/* Checkbox & Remeber me */}
          <div style={{marginTop:'15px', display:'flex', alignItems:'center', gap:'15px'}}>
            <input type="checkbox" />
            <span style={{font:'bold', display:'flex', gap:'15px'}}>Remember me</span>
          </div>

          {/* sigIn */}
          <div style={{marginTop:'20px',}}>
            <div style={{width:'40%', backgroundColor:'#0c0c0cff', padding:'12px', borderRadius:'12px', display:'flex',  justifyContent:'center'}}>
               <button style={{backgroundColor:'#0c0c0cff', border: 'none', outline:'none', color:'white', }}>Sig In</button>
            </div>
          </div>

          {/* Sign up & Forgot Password */}
          <div style={{marginTop:'20px'}}>
            <span>Don't have an account ? <b>Sign up <br />Forget Password </b></span>
          </div>

          {/* icons */}
          <div style={{marginTop:'20px', display:'flex',justifyContent:'flex-start', width:'50%', gap:'20px', fontSize:'22px', alignItems:'center'}}>
            <button style={{border:'none', outline:'none', padding:'12px', backgroundColor:'#f7f7f7', fontSize:'22px'}}><FcGoogle /></button>
            <button style={{border:'none', outline:'none', padding:'12px', backgroundColor:'#f7f7f7', fontSize:'22px'}}><FaGithub /></button>
            <button style={{border:'none', outline:'none', padding:'12px', backgroundColor:'#f7f7f7', fontSize:'22px'}}><FaFacebook style={{color:'#077aff', borderRadius:'50px'}} /></button>
          </div>
        </div>
      </div>
      {/* image & some text */}
      <div>
        <img src="" alt="" />
      </div>
      </div>
      
    </div>
  );
}

export default logIn;
