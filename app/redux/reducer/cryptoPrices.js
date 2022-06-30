import {PRICES} from '../cryptoPricesAction';

const initialState = {
  prices: [],
};
export default function (state = initialState, action) {
  const {type,payload} = action
  switch (type) {
    case PRICES:
      return {
        ...state,
        prices:payload,
      };
    default:
      return state; //must be like this so it can  presist the reducers
  }
}


