import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import useStyle from "./style";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Input from "./Input";

// const initialState = {
//   productName: "",
//   price: "",
//   id: "",
//   date: "",
// };
const Product = ({ userDetail, setUserDetail, setChange }) => {
  const classes = useStyle();
  const [today, setToday] = useState("");

  //   const [userDetail, setUserDetail] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChange(1);
    console.log(userDetail);
  };

  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;
    setToday(formattedToday);
    setUserDetail({ ...userDetail, date: formattedToday });
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ShoppingCartIcon />
        </Avatar>
        <Typography variant="h5">{"Product Detail"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Typography variant="body1">Date: {today}</Typography>

            <>
              <Input
                name="productName"
                label="Product Name"
                variant="outlined"
                required
                // fullWidth
                handleChange={handleChange}
                // autoFocus
                value={userDetail.productName}
              />
            </>

            <Input
              name="price"
              label="Price"
              handleChange={handleChange}
              value={userDetail.price}
              type="number"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {"Order"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Product;
