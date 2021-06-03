import * as ACTIONSTATES from "./ActionTypes";
import get from "get-value";

const initState = {
  numberCart: 0,
  Carts: [],
  userDetails: {},
};

const Reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ACTIONSTATES.LOGINUSER: {
      return {
        ...state,
        userDetails: { ...action.payload },
      };
    }
    case ACTIONSTATES.LOGOUT:
      delete state.userDetails;
      return { ...state };

    case ACTIONSTATES.GET_ALL_CART_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ACTIONSTATES.GET_NUMBER_CART:
      return {
        ...state,
      };

    case ACTIONSTATES.ADD_CART: {
      const Cart = state.Carts || [];
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
        };
        Cart.push(cart);
      } else {
        let check = false;
        Cart.forEach((item, idx) => {
          if (item.id === action.payload.id) {
            Cart[idx].quantity++;
            check = true;
          }
        });

        if (!check) {
          const newItem = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
          };
          Cart.push(newItem);
        }
      }
      return {
        ...JSON.parse(JSON.stringify(state)),
        numberCart: state.numberCart + 1,
      };
    }

    case ACTIONSTATES.INCREASE_QUANTITY: {
      const currentProduct = get(action, "payload", {});
      const existingCart = get(state, "Carts", []);
      const currentProductInStore = existingCart.find(
        (data) => data.id === currentProduct.id
      );
      currentProductInStore.quantity++;
      state.numberCart++;
      return {
        ...JSON.parse(JSON.stringify(state)),
      };
    }
    case ACTIONSTATES.DECREASE_QUANTITY: {
      const currentProduct = get(action, "payload", {});
      const existingCart = get(state, "Carts", []);
      const currentProductInStore = existingCart.find(
        (data) => data.id === currentProduct.id
      );
      if (currentProductInStore.quantity > 1) {
        currentProductInStore.quantity--;
        state.numberCart--;
      }
      return {
        ...JSON.parse(JSON.stringify(state)),
      };
    }

    case ACTIONSTATES.DELETE_CART: {
      const currentProduct = get(action, "payload", {});
      const existingCart = get(state, "Carts", []);
      const currentProductInStore = existingCart.find(
        (data) => data.id === currentProduct.id
      );
      const productQuantity = get(currentProductInStore, "quantity", 1);
      return {
        ...JSON.parse(JSON.stringify(state)),
        numberCart: state.numberCart - productQuantity,
        Carts: state.Carts.filter((item) => {
          return item.id !== currentProductInStore.id;
        }),
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default Reducer;
