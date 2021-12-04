import { loginStart, loginSuccess, loginFailure, logoutSuccess } from './userRedux';
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

export const logout = (dispatch) => {
    dispatch(logoutSuccess());
}