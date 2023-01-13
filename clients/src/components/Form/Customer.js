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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Input from "./Input";

// const initialState = {
//   name: "",
//   email: "",
//   phoneNo: "",
// };
const Customer = ({ userDetail, setUserDetail, setChange }) => {
  const classes = useStyle();
  const [today, setToday] = useState("");

  //   const [userDetail, setUserDetail] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetail({ ...userDetail, id: Date.now().toString() });
    setChange(2);
    console.log(userDetail);
  };
  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  const backHandler = () => {
    setChange(0);
    console.log("hi");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ShoppingCartIcon />
        </Avatar>
        <Typography variant="h5">{"Customer Detail"}</Typography>
        <div></div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Avatar className={classes.avatar} onClick={backHandler}>
            {/* <ShoppingCartIcon /> */}
            <ArrowBackIcon />
          </Avatar>
          <Grid container spacing={2}>
            <>
              <Input
                name="name"
                label=" Name"
                handleChange={handleChange}
                autoFocus
                value={userDetail.name}
              />
            </>

            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
              value={userDetail.email}
            />
            <Input
              name="phoneNo"
              label="Phone No."
              handleChange={handleChange}
              type="number"
              value={userDetail.phoneNo}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {"Next"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Customer;
