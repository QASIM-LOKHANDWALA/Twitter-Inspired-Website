import axios from "axios";
import { TWEET_API_ENDPOINT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyTweets } from "../redux/tweetSlice";

const useMyTweets = (id) => {
    const dispatch = useDispatch();
    const { refresh, isActive } = useSelector((store) => store.tweet);

    const fetchMyTweets = async () => {
        try {
            const res = await axios.get(`${TWEET_API_ENDPOINT}/getTweets`, {
                withCredentials: true,
            });
            console.log(res);
            dispatch(getMyTweets(res?.data?.tweets));
        } catch (error) {
            console.log(`Error in useMyTweets : ${error}`);
        }
    };

    const fetchFollowingTweets = async () => {
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.get(
                `${TWEET_API_ENDPOINT}/getFollowingTweets`
            );
            console.log("========== followingTweetHandler ==========");
            console.log(res);
            dispatch(getMyTweets(res?.data?.tweets));
        } catch (error) {
            console.log(
                `Error in fetching tweet inside followingTweetHandler : ${error}`
            );
        }
    };

    useEffect(() => {
        if (isActive) fetchMyTweets();
        else fetchFollowingTweets();
    }, [refresh, isActive]);
};

export default useMyTweets;
