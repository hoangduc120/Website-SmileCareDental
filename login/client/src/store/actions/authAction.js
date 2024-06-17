import { apiLoginSuccess } from '../../apis/authService'
import actionType from './actionTypes'

export const loginSuccess = (id, tokenLogin) => async (dispatch) => {
    try {
        let response = await apiLoginSuccess(id, tokenLogin)
        if (response?.data.err === 0) {
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                data: response.data.token
            })
        }else{
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                data: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionType.LOGIN_SUCCESS,
            data: null
        })
    }
}

export const logout = () => ({
    type: actionType.LOGOUT
})