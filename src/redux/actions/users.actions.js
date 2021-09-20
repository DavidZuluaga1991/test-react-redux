import { types } from "../types";
import axios from 'axios';

export const loadUsersAction = (page) => async (dispatch) => {
    dispatch({ type: types.USERS.LOAD_USERS });
    try {
        const { data } = await axios.get( `https://reqres.in/api/users?page=${page}` );
        console.log(data);
        dispatch({
            type: types.USERS.LOAD_USERS_SUCCESS,
            payload: data
        });
    } catch (error) {
		dispatch({
			type: types.USERS.LOAD_USERS_ERROR,
			payload: error,
		});
    }
}
