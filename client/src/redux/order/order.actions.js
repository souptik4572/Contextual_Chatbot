import axios from "../../helpers/axios";
import {
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
} from "./order.types";

export const fetchOrderRequest = () => ({
  type: FETCH_ORDER_REQUEST,
});

export const fetchOrderSuccess = (orders) => ({
  type: FETCH_ORDER_SUCCESS,
  payload: orders,
});

export const fetchOrderFailure = (errorMessage) => ({
  type: FETCH_ORDER_FAILURE,
  payload: errorMessage,
});

export const getAllOrders = () => async (dispatch, getState) => {
  dispatch(fetchOrderRequest());
  try {
    const {
      admin: { token },
    } = getState();
    const response = await axios.get("/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data: orders } = response.data;
    dispatch(fetchOrderSuccess(orders));
    return true;
  } catch (error) {
    dispatch(fetchOrderFailure(error.response.data.message));
    return false;
  }
};
