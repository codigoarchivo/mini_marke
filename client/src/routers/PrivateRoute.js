import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {

  const { uid } = useSelector(({ auth }) => auth);

  return  !!uid ? children : <Navigate to="/login" />;
};
