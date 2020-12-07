import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
      case actionTypes.PURCHASE_BURGER_START:
          return {
            ...state,
            loading: true  
          };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      console.log(action.orderData);
        const newOrder = {
            ...action.orderData,
            id: action.orderId
        }
      return {
          ...state,
          loading: false,
          orders: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
          ...state,
          loading: false
      };
    default:
      return state;
  }
};


export default reducer;