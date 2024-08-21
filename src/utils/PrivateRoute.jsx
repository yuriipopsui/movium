import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({children, isAuth}) => {
  return (
    isAuth ? children : <Navigate to={'/login_page'} />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.array,
  isAuth: PropTypes.bool
}

export default PrivateRoute;