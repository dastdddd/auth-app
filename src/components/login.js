import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpenLogin } from '../redux/actions';
import { LoginService } from '../thunk/services';
const initialState = {
  identity: '',
  password: ''
}

const Login = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth)// для загрузки
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(LoginService(form))
    setForm(initialState)
  }

  return (
    <div className='auth-form' >
      <button className='close-form' onClick={() => dispatch(toggleOpenLogin(false))}>X</button>
      <h1>Login</h1>
      <form className='form-submit' action="" onSubmit={handleSubmit}>
        <input
          name='identity'
          value={form.identity}
          onChange={handleChange}
          type="text"
          placeholder='login' />
        <input
          name='password'
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder='password' />
        <button>{isLoading ? 'loading...' : 'login'}</button>
        {/* можно сделать  loading анимацию  вызывая сюда компонент */}
      </form>

    </div>
  );
};

export default Login;