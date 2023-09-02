import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({children, isAuth}) => {
  return (
    isAuth ? children : <Navigate to={'/login'} />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.object,
  isAuth: PropTypes.bool
}

export default PrivateRoute;