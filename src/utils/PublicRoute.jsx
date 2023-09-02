import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ children, isAuth, isPublicOnly }) => {
  return (
    isAuth && isPublicOnly ? <Navigate to={'/'} /> : children
  );
}

PublicRoute.propTypes = {
  children: PropTypes.object,
  isAuth: PropTypes.bool,
  isPublicOnly: PropTypes.bool,
}

export default PublicRoute;