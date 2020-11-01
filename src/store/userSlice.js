import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getInfor, getSession } from "../api";

export const signin = createAsyncThunk(
    "user",
    async (data, { rejectWithValue }) => {
        let session = await getSession(data);
        if (session.success) {
            let info = await getInfor(
                session.payload.id,
                session.payload.token
            );
            return { session: session.payload, info: info.payload };
        } else return rejectWithValue(session);
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: { isLogin: false, session: {}, info: {} },
    reducers: {
        signout: () => ({ isLogin: false, session: {}, info: {} }),
    },
    extraReducers: {
        [signin.fulfilled]: (state, action) => {
            return { isLogin: true, ...action.payload };
        },
        [signin.rejected]: (state, action) => {
            console.log(action.payload);
        },
    },
});

const { actions, reducer } = userSlice;
export default reducer;
