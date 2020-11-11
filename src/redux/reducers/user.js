import { SET_USER } from '../actions/user';

const initialState = {
  name: 'Гость',
  password: '',
  signed: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state;
  }
};
