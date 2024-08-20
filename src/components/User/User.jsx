import { useState, useRef, useEffect } from 'react';
import styles from './User.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/selectors/usersSelector';
import LogOut from '../LogOut/LogOut';

function User() {

  const user = useSelector(userSelector);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const openRef = useRef(null);
  // const {isAuth, user: {userName}} = user;

  const isAuth = user?.isAuth ?? false;
  const userName = user?.user?.userName ?? '';

  useEffect(() => {
    // Add event listener to handle clicks outside of the dropdown menu
    const handleClickOutside = (event) => {
      if (openRef.current && !openRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
     //cleanup event listener 
     document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openRef]);

  const userOnClickHandler = () => {
    isAuth ? (setIsOpen(!isOpen)) : navigate('/login_page');
    // console.log('user worked');
  }

  return (
    <div className={styles.user} onClick={userOnClickHandler} ref={openRef}>
     { isAuth ? userName : 'Log In'}
     <LogOut isOpen={isOpen}/>
    </div>
  )
}

export default User;
