import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useCheckToken = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "null") {
      let userConfirmed = confirm("Anda belum login, login sekarang?");
      if (userConfirmed) {
        navigate("/auth/sign-in");
      } else {
        navigate("/");
      }
    }
  }, []);
};

export default useCheckToken;
