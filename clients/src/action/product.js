import * as api from "../api/index.js";

export const addProduct = async (userData) => {
  try {
    const data = await api.addProduct(userData);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const allProduct = async () => {
  try {
    const data = await api.allProduct();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
