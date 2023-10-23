import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { count: 10 },
  reducers: {},
});

export default userSlice.reducer;
