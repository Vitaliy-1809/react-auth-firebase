import React from 'react';
import { useDispatch } from 'react-redux';
import Form from './Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        push('/')
      })
      .catch(() => alert('Invalid user'))
  }

  return (
    <Form
      title='sign in'
      handleClick={handleLogin}
    />
  );
}

export default Login;
