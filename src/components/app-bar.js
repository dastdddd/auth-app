import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpenLogin, toggleOpenRegister, toggleCloseAuth, logooutUser } from '../redux/actions';

const Appbar = () => {
  const { users, isLoading, isErrorMessage, } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  return (
    <header className='app-bap'>
      <h1
        style={{ cursor: 'pointer' }}
        onClick={() => dispatch(toggleCloseAuth())}>logo</h1>
      <nav>
        {
          users.username && users.username !== '' ?
            <>
              <span>{users.username}</span>
              <button onClick={() => dispatch(logooutUser())}>logout</button>
            </> :
            <>
              <button onClick={() => dispatch(toggleOpenRegister(true))}>register</button>
              <button onClick={() => dispatch(toggleOpenLogin(true))}>login</button>
            </>
        }
      </nav>
    </header>
  );
};

export default Appbar;