import { AnyAction as IAnyAction } from 'redux';
import { USER_REQUEST, USER_REQUEST_ERROR, USER_REQUEST_RESET, USER_REQUEST_SUCCESS } from '../../action/UseActionTypes';

const defaultState = {
  loading: false,
};


const userReducer = (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case USER_REQUEST:
      return { ...state, loading: true };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        ...action.payload.data,
        loading: false,
        success: true,
      };
    case USER_REQUEST_ERROR:
      return { ...state, ...action.error, loading: false, error: true };
    case USER_REQUEST_RESET:
      return { ...state, success: false };
    default:
      return state
  }
};
export default userReducer;