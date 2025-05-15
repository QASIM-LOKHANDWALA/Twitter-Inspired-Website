import axios from "axios";
import { TWEET_API_ENDPOINT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyTweets } from "../redux/tweetSlice";

const useMyTweets = (id) => {
    const dispatch = useDispatch();
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
    }, [id]);
};

export default useMyTweets;
