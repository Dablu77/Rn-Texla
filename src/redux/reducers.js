// import {SET_PHONE_NUMBER} from './actions';

// const initialState = {
//   phone: '',
// };

// function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_PHONE_NUMBER:
//       return {...state, phone: action.payload};
//     default:
//       return state;
//   }
// }

// export default userReducer;

import types from './types';

let init_state = {
  num: 0,
};

export function counterReducer(state = init_state, action) {
  switch (action.type) {
    case types.INCREMENT:
      let data = action.payload;
      return {...state, num: data + 1};

    case types.DECREMENT:
      let data = action.payload;
      return {...state, num: data - 1};
    default:
      break;
  }
}
