import {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logoutSuccess,
} from './userRedux';
import { publicRequest } from '../utils/requestMethods';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post('/auth/register', user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure());
    }
};

export const logout = (dispatch) => {
    dispatch(logoutSuccess());
};