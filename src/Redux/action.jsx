import axios from "axios";
import {
  GET_BOOKS_FAILUARE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actioType";

export const GBR = () => {
  return {
    type: GET_BOOKS_REQUEST,
  };
};

export const GBS = (payload) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload,
  };
};

export const GBF = () => {
  return {
    type: GET_BOOKS_FAILUARE,
  };
};

export const getBookData = (params) => (dispatch) => {
  dispatch(GBR());
  axios
    .get("http://localhost:8080/books", params)
    .then((result) => {
      dispatch(GBS(result.data));
      // console.log(params)
    })
    .catch((err) => {
      dispatch(GBF());
    });
};
