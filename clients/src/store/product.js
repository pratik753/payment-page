// import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (product = [], action) => {
  // console.log(product);
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...product, action.payload];
    case "UPDATE":
      return product.map((post) =>
        product._id === action.payload._id ? action.payload : post
      );
    case "DELETE":
      return product.filter((post) => post._id !== action.payload);
    default:
      return product;
  }
};
