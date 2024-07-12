import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//const data = JSON.parse(localStorage.getItem('cart'));

const initialState = {
  products: [],
  error: null,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    displayProduct: (state, action) => {
      state.products = action.payload;
    },
    createProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createProductSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      toast.success("Course created Successfully");
    },
    createproductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error(action.payload);
    },
  },
});

export const {
  createProductSuccess,
  createProductsStart,
  displayProduct,
  createproductFailure,
} = productSlice.actions;
export default productSlice.reducer;
