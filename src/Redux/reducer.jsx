import { GET_BOOKS_FAILUARE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actioType";

const initialState = {
  books: [],
  isload: false,
  iserror: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_REQUEST:{
      return { ...state, isload:true };
    }

    case GET_BOOKS_SUCCESS:{
      return { ...state, books:payload , isload:false};
    }

    case GET_BOOKS_FAILUARE:{
      return { ...state, isload:false, iserror:true };
    }
    default:
      return state;
  }
};
