import React from 'react';
import './App.css';
import Appbar from './components/app-bar';
import { useSelector } from 'react-redux';
import Login from './components/login';
import Register from './components/register';

const App = () => {
  const {isOpenLogin, isOpenRegister} = useSelector(state => state.auth);
 
  return (
    <div className='App'>
      <Appbar/>
      {isOpenLogin ? <Login/> : null}
      {isOpenRegister ? <Register/> : null}
    </div>
  );
};

export default App;