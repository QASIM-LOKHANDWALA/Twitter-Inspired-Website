import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/userSlice";

const useUserProfile = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(
                    `${USER_API_ENDPOINT}/profile/${id}`,
                    {
                        withCredentials: true,
                    }
                );
                console.log(res);
                dispatch(getProfile(res?.data?.user));
            } catch (error) {
                console.log(`Error in useUserProfile : ${error}`);
            }
        };
        fetchProfile();
    }, [id]);
};

export default useUserProfile;
