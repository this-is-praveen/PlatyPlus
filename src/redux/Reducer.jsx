import * as ACTIONSTATES from "./ActionTypes";

const initState = {
  numberCart: 0,
  Carts: [],
  userDetails: {},
};

const Reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ACTIONSTATES.LOGINUSER: {
      return {
        userDetails: { ...action.payload },
        ...state,
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
    case ACTIONSTATES.INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...JSON.parse(JSON.stringify(state)),
      };

    case ACTIONSTATES.DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...JSON.parse(JSON.stringify(state)),
      };
    case ACTIONSTATES.DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...JSON.parse(JSON.stringify(state)),
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id != state.Carts[action.payload].id;
        }),
      };
    default: {
      return { ...state };
    }
  }
};

export default Reducer;
