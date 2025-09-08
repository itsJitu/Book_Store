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

  return <h1>Welcome Home 🚀</h1>;
}

export default home
