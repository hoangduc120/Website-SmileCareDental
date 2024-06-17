import actionType from "../actions/actionTypes";
const initState = {
    isLoggedIn: false,
    token: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn: action.data ? true : false,
                token: action.data
            }
            case actionType.LOGOUT:
                return{
                    ...state,
                    isLoggedIn: false,
                    token: null
                }
        default:
            return state;
    }
}

export default authReducer