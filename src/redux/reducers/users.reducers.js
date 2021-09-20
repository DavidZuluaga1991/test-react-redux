import { types } from "./../types";

const initialState = {
    users: [],
    loadding: false,
    error: null
};


export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS.LOAD_USERS:
            return {
                ...state,
                users: action.payload,
                loadding: false,
                error: null
            }
        case types.USERS.LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loadding: false,
                error: null
            }
        case types.USERS.LOAD_USERS_ERROR:
            return {
                ...state,
                loadding: false,
                error: action.payload
            }
        default:
            return state
    }
}