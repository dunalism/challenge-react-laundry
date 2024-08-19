import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../lib/axios";

//Membuat Thunk untuk Login
export const loginUser = createAsyncThunk(
  //LoginUser adalah fungsi asinkron yang digunakan untuk mengirimkan request login ke server

  "auth/loginUser", //Action type unik yang digunakan untuk mengidentifikasi aksi ini di Redux.
  async (credential, { rejectWithValue }) => {
    //credential adalah Objek yang berisi email dan password yang diinput oleh user
    try {
      const response = await axios.post("/auth/login", credential);

      return response.data;
    } catch (error) {
      console.log(rejectWithValue);
      return rejectWithValue(error.response.data);
    }
  }
);

//Mendefinisikan Inital State
const initialState = {
  user: null,
  password: null,
  token: null,
  loading: false,
  error: null,
};

//Membuat slice/store
const authSlice = createSlice({
  name: "auth", //Nama slice ini, digunakan sebagai namespace untuk action types yang dihasilkan secara otomatis.
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.meta.arg.username;
        state.token = action.payload.data.token;
        state.password = action.meta.arg.password;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.status.description;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
