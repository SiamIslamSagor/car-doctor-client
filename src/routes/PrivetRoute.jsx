import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center mb-10">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
