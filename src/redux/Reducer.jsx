import React from "react";

const Reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          data: action.payload,
        },
      ];
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
