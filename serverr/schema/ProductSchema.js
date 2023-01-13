const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: String },
  date: { type: String, required: false },
  name: { type: String, required: false },
  email: { type: String, required: false },
  phoneNo: { type: String },
  productName: { type: String },
  price: { type: String },
  paymentStatus: { type: String, default: "Fail" },
  razorpay_order_id: { type: String },
  razorpay_payment_id: { type: String },
  razorpay_signature: { type: String },
});
const Product = mongoose.model("User", ProductSchema);
module.exports = Product;
