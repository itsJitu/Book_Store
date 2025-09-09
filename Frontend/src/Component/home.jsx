import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      // remove token from URL
      navigate("/home", { replace: true });
    }
  }, [location, navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#D2C6B1",
      }}
    >
      <div
        style={{
          maxWidth: "800px", // control max content width
          width: "100%",
          padding: "5px 50px",
          backgroundColor: "#F9F3EE",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{}}>
            <h1>Welcome Reader</h1>
          </div>
          <div style={{ display: "flex", gap: "20px", fontSize: "20px" }}>
            <span>Home</span>
            <span>Books</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>

        {/* Hero section */}
        <div style={{}}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span>B</span>

              {/* Container for merged O’s */}
              <div
                style={{ position: "relative", width: "70px", height: "70px" }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    color:'#239fd4ff'
                  }}
                >
                  O
                </span>
                <span
                  style={{
                    position: "absolute",
                    left: "20px", // overlap amount
                    top: "0",
                    color:'#d42346ff'
                  }}
                >
                  O
                </span>
              </div>

              <span>K S</span>
            </div>

            <div>F O R &nbsp; A L L</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
