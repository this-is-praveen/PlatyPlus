import * as ACTIONSTATES from "./ActionTypes";

export function GetAllCartProduct(payload) {
  return {
    type: ACTIONSTATES.GET_ALL_CART_PRODUCTS,
    payload,
  };
}

/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: ACTIONSTATES.GET_NUMBER_CART,
  };
}

export function AddCart(payload) {
  return {
    type: ACTIONSTATES.ADD_CART,
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: ACTIONSTATES.UPDATE_CART,
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: ACTIONSTATES.DELETE_CART,
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: ACTIONSTATES.INCREASE_QUANTITY,
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: ACTIONSTATES.DECREASE_QUANTITY,
    payload,
  };
}
