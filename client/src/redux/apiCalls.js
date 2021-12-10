import {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logoutSuccess,
    updateStart,
    updateSuccess,
    updateFailure,
} from './userRedux';
import { publicRequest, userRequest } from '../utils/requestMethods';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await userRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await userRequest.post('/auth/register', user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure());
    }
};

export const updateUser = async (dispatch, id, user) => {
    dispatch(updateStart());
    try {
        const res = await userRequest.put(`/users/${id}`, user);
        dispatch(updateSuccess(res.data));
    } catch (error) {
        dispatch(updateFailure());
    }
};

export const logout = (dispatch) => {
    dispatch(logoutSuccess());
};