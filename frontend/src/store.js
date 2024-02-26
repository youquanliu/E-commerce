import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productTopRatedReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducer";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
} from "./reducers/orderReducer";

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;

// const reducer = combineReducers({
//   productList: productListReducer,
//   productTopRated: productTopRatedReducer,
//   productDetails: productDetailsReducer,
//   productDelete: productDeleteReducer,
//   productCreate: productCreateReducer,
//   productUpdate: productUpdateReducer,
//   productReviewCreate: productReviewCreateReducer,
//   cart: cartReducer,
//   userLogin: userLoginReducer,
//   userRegister: userRegisterReducer,
//   userDetail: userDetailReducer,
//   userUpdateProfile: userUpdateProfileReducer,
//   userList: userListReducer,
//   userDelete: userDeleteReducer,
//   userUpdate: userUpdateReducer,
//   orderCreate: orderCreateReducer,
//   orderDetails: orderDetailsReducer,
//   orderPay: orderPayReducer,
//   orderListMy: orderListMyReducer,
//   orderList: orderListReducer,
//   orderDeliver: orderDeliverReducer,
// });

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// const userInfoStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
//   ? JSON.parse(localStorage.getItem("shippingAddress"))
//   : {};

// const initialState = {
//   cart: {
//     cartItems: cartItemsFromStorage,
//     shippingAddress: shippingAddressFromStorage,
//   },
//   userLogin: { userInfo: userInfoStorage },
// };

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
