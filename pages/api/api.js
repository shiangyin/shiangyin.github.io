import axios from "axios";

const DOMAIN = "https://go-dutch.dearcrab.com/api";

export const register = async (data) => {
  
  return await axios.post(`${DOMAIN}/user/register`, data);
};

export const login = async (data) => {
  return await axios.post(`${DOMAIN}/user/login`, data);
};
