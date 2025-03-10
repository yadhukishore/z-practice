import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
});

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
