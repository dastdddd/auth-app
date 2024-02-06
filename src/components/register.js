import React, { useState } from 'react';
import { toggleOpenRegister } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterService } from '../thunk/services';
const initialState = {
  username: '',
  passwordConfirm: '',
  password: ''
}

const Register = () => {
  const [form, setForm] = useState(initialState);
  const {isLoading} = useSelector(state => state.auth) // для загрузки
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password === form.passwordConfirm) {
      dispatch(RegisterService(form))
      setForm(initialState)
    } else {
      alert('пароль не совпадает!')
    }
  }
  //form.password === form.passwordConfirm - при регистрациии пароль должен совпадать
  return (
    <div className='auth-form' >
      <button className='close-form' onClick={() => dispatch(toggleOpenRegister(false))}>X</button>
      <h1>Register</h1>
      <form className='form-submit' action="" onSubmit={handleSubmit}>
        <input
          name='username'
          value={form.username}
          onChange={handleChange}
          type="text"
          placeholder='login' />
        <input
          name='password'
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder='password' />
        <input
          name='passwordConfirm'
          value={form.passwordConfirm}
          onChange={handleChange}
          type="password"
          placeholder='password confirm' />
        <button>{isLoading ? 'loading...' : 'register'}</button>
      </form>
    </div>
  );
};

export default Register;