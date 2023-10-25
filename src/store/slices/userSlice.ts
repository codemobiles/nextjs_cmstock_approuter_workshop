import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as serverService from "@/src/services/serverService";
import httpClient from "@/src/utils/httpClient";
import { AxiosRequestConfig } from "axios";

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await serverService.signUp(credential);
    return response;
  }
);

export const signIn = createAsyncThunk(
  "user/signin",
  async (credential: SignAction) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await serverService.signIn(credential);

    if (response.result != "ok") {
      throw new Error("login failed");
    }

    // set access token
    httpClient.interceptors.request.use((config?: AxiosRequestConfig | any) => {
      if (config && config.headers) {
        config.headers["Authorization"] = `Bearer ${response.token}`;
      }

      return config;
    });

    return response;
  }
);

export const signOut = createAsyncThunk("user/signout", async () => {
  await serverService.signOut();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(signUp.pending, (state) => {
      state.status = "fetching";
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.count++;
      state.status = "success";
    });

    builder.addCase(signUp.rejected, (state) => {
      state.status = "failed";
    });

    // Login
    builder.addCase(signIn.pending, (state) => {
      state.status = "fetching";
      state.isAuthenticating = true;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.count++;
      state.status = "success";
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
      state.username = action.payload.username;
    });

    builder.addCase(signIn.rejected, (state) => {
      state.status = "failed";
      state.accessToken = "";
      state.isAuthenticated = false;
      state.isAuthenticating = false;
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.accessToken = "";
      state.isAuthenticated = false;
      state.isAuthenticating = false;
    });
  },
});

export default userSlice.reducer;
export const { add } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
