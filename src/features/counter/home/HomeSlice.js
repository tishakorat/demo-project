import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDataAPI, loginUserAPI } from "./HomeAPI";
const initialState = {
    loading: false,
    data: {}
}
export const getAllData = createAsyncThunk("product/getAllData", async () => {
    const response = await getAllDataAPI()
    if (response && response.status == 200) {
        return response.data
    }
})
export const loginUser = createAsyncThunk("product/loginUser", async(value) => {
    let response = await loginUserAPI(value)
    console.log(response);
    if(response && response.status == 200) {
        localStorage.setItem("token", response.data.token)
    }
})
const HomeSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllData.pending, (state) => {
            state.loading = true
        }).addCase(getAllData.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
    }
})

export default HomeSlice.reducer