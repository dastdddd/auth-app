export const toggleOpenLogin = (bool) => ({type: 'TOOGLE_OPEN_LOGIN', payload: bool});
export const toggleOpenRegister = (bool) => ({type: 'TOOGLE_OPEN_REGISTER', payload: bool});

export const toggleCloseAuth = () => ({type: 'CLOSE'});

export const loadingAuth = (bool)=> ({type: 'IS_LOADING_AUTH', payload: bool});

export const loadUser = (data)=> ({type: 'LOAD_USER', payload: data});

export const logooutUser = ()=> ({type: 'LOGOOUT_USER'});

