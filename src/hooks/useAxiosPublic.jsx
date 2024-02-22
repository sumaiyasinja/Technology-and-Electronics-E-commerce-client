import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bytopia-tech-shop-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;