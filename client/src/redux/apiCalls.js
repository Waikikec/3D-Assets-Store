import { loginStart, loginFailure, loginSuccess } from './userRedux';
import axios from 'axios';

export const login = async (dispatch, user) => {
    dispatch(loginStart);
    try {
        const res = await axios.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure);
    }
};