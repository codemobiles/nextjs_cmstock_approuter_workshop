import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as serverService from "@/src/services/serverService";

interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  status: "fetching" | "success" | "failed" | "init";
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  count: 0;
}

const initialState: UserState = {
  accessToken: "",
  username: "",
  status: "init",
  isAuthenticated: false,
  isAuthenticating: true,
  count: 0,
};

interface SignAction {
  username: string;
  password: string;
}
export const signUp = createAsyncThunk(
  "user/signup",
  async (credential: SignAction) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await serverService.signUp(credential);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.status = "fetching";
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.count++;
      state.status = "success";
    });
  },
});

export default userSlice.reducer;
export const { add } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
