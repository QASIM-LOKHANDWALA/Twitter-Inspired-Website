import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        profile: null,
        otherUsers: null,
    },
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload;
        },
        getOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
        getProfile: (state, action) => {
            state.profile = action.payload;
        },
        getFollowRefresh: (state, action) => {
            if (state.user.following.includes(action.payload)) {
                state.user.following = state.user.following.filter(
                    (elem) => elem !== action.payload
                );
            } else {
                state.user.following.push(action.payload);
            }
        },
    },
});

export const { getUser, getOtherUsers, getProfile, getFollowRefresh } =
    userSlice.actions;
export default userSlice.reducer;
