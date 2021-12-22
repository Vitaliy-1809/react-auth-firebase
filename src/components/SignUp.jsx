import React from 'react';
import { useDispatch } from 'react-redux';
import Form from './Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slices/userSlice'
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        push('/')
      })
      .catch(console.error)
  }

  return (
    <Form
      title='register'
      handleClick={handleRegister}
    />
  );
}

export default Signup;
