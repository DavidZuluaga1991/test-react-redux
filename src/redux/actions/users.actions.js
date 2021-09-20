import { types } from "../types";

export const loadUsersAction = () => (dispatch) => {
    dispatch(
        { type: types.USERS.LOAD_USERS }
    );
}
export const loadUsersSuccessAction = () => (dispatch) => {
    dispatch(
        { type: types.USERS.LOAD_USERS_SUCCESS }
    );
}
