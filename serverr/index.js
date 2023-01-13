const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json({ limit: "200kb" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); //urlencodednp

app.use(cors());

// const busRoute = require("./Routes/BusRoute");
const ProductRoute = require("./Routes/ProductRoute");
const PaymentRoute = require("./Routes/PaymentRoute");
//const entryRoute=require('./Routes/EntryRoutes')

// console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful"));

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
app.get("/", (req, res) => {
  res.send("Hello Payment API");
});
app.use("/product", ProductRoute);
app.use("/payment", PaymentRoute);

//app.use('/entry',entryRoute);
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
/*
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
*/
