import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
    name: "tweet",
    initialState: {
        tweets: null,
    },
    reducers: {
        getMyTweets: (state, action) => {
            state.tweets = action.payload;
        },
    },
});

export const { getMyTweets } = tweetSlice.actions;
export default tweetSlice.reducer;
