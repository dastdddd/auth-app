const initialState = {
  users: {},
  isLoading: false,
  isErrorMessage: null,
  isOpenLogin: false,
  isOpenRegister: false,

}

export const authReducer = (state = initialState, action) => {
  const {payload, type} = action;

  switch(type) {
    case "TOOGLE_OPEN_LOGIN" : {
      return {
        ...state, 
        isOpenLogin: payload, // true false либо открыть или закрыть
        isOpenRegister: false //закрыть регистрации
      }
    }
    case "TOOGLE_OPEN_REGISTER" : {
      return {
        ...state, 
        isOpenRegister: payload, // true false либо открыть или закрыть
        isOpenLogin: false //закрыть логина
      }
    }
    case "CLOSE": {
      return {
        ...state, 
        isOpenLogin: false, //закрыть логина
        isOpenRegister: false //закрыть регистрации
      }
    }
    case "IS_LOADING_AUTH": {
      return {
        ...state, 
        isLoading: payload
      }
    }
    case "LOAD_USER": {
      return {
        ...state, 
        users: payload, //response.data.record
        isOpenLogin: false, //закрыть логина
        isOpenRegister: false //закрыть регистрации
      }
    }
    case "LOGOOUT_USER": {
      localStorage.removeItem('auth-token');//убераем токен
      return {
        ...state, 
        users: {}//делаем начальный пустой 

      }
    }
    default: 
      return state
  }
}