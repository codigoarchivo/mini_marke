import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PublicRoute = ({ children }) => {
  
  const { uid } = useSelector(({ auth }) => auth);

  return !!uid ? <Navigate to="/" /> : children;
};
