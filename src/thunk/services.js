import axios from "axios";
import { loadUser, loadingAuth } from "../redux/actions";

axios.defaults.baseURL = 'http://startflutter.ir/api/'

export const RegisterService = (data)=> {
  return async (dispatch) => {
    dispatch(loadingAuth(true))//загрузка до загружение данных
    try {
      const response = await axios.post('collections/users/records', data)//<--data для post запросов
      dispatch(loadingAuth(false))//отменяем загрузку после полусение
      if (response.status === 200 && response.statusText === 'OK')
      alert ('Успешно!')
    } catch (e) {
      dispatch(loadingAuth(false))//отменяем загрузку после получение неуспешной
      alert(e.message);
    }
  }
}
export const LoginService = (data)=> {
  return async (dispatch) => {
    dispatch(loadingAuth(true))
    try {
      const response = await axios.post('collections/users/auth-with-password', data)
      dispatch(loadingAuth(false))
      localStorage.setItem('auth-token',JSON.stringify(response.data.token));
      dispatch(loadUser(response.data.record))
      if (response.status === 200 && response.statusText === 'OK')
      alert ('Успешно!')
    } catch (e) {
      dispatch(loadingAuth(false))
      alert(e.message);
    }
  }
}