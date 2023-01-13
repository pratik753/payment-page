const Product = require("../schema/ProductSchema");
exports.addProduct = async (req, res) => {
  const users = req.body;
  console.log(users, "users");
  try {
    const result = await Product.create(users);
    console.log(result);
    res.status(200).json({ data: "successful IAnsertion" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",
    });
  }
};
exports.allProduct = async (req, res) => {
  const users = req.body;
  console.log(users, "users");
  try {
    const result = await Product.find();
    res.status(200).json(result);
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion",
    });
  }
};

// exports.busAdd = async (req, res) => {
//   try {
//     // const { useId } = req.body;
//     console.log(req.useId);
//     if (req.useId === undefined) {
//       res.status(200).json({ message: "Not auth", status: 1 });
//     }
//     console.log(req.body);
//     res.status(200).json({ message: "bus add auth", status: 0 });
//   } catch (error) {
//     console.log(error);
//   }
// };
