import axios from "axios";
import { TWEET_API_ENDPOINT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyTweets } from "../redux/tweetSlice";

const useMyTweets = (id) => {
    const dispatch = useDispatch();
    const { refresh } = useSelector((store) => store.tweet);
    useEffect(() => {
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
        fetchMyTweets();
    }, [refresh]);
};

export default useMyTweets;
