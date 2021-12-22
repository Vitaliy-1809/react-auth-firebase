import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import { removeUser } from '../store/slices/userSlice'

const Homepage = () => {
  const { isAuth, email } = useAuth()
  const dispatch = useDispatch()

  return (
    isAuth
      ? (
        <div>
          <h1>Welcome</h1>

          <button
            onClick={() => dispatch(removeUser())}
          >
            Logout from {email}
          </button>
        </div>
      )
      : (
        < Redirect to='/login' />
      )
  );
}

export default Homepage;
