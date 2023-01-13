import axios from "axios";

const API = axios.create({
  // baseURL: "https://payment-backend.onrender.com/",
  baseURL: "http://localhost:4000",
});
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${JSON.parse(
//       localStorage.getItem("profile")
//     )}`;
//   }
//   console.log(localStorage.getItem("profile"));
//   return req;
// });
export const addProduct = (userData) =>
  API.post("/product/addProduct", userData);
export const allProduct = (userData) => API.get("/product/allProduct");

// export const login = (loginData) => API.post("/user/login", loginData);
// export const signUp = (signUpData) => API.post("/user/signUp", signUpData);

// export const busAdd = (busData) => API.post("/bus/busAdd", busData);
