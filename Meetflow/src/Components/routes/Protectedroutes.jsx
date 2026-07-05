import { Navigate } from "react-router-dom";

const Protectedroutes = ({ children }) => {
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default Protectedroutes;