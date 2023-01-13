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
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Input from "./Input";
import PaymentPage from "../Payment/PaymentPage";

// const initialState = {
//   name: "",
//   email: "",
//   phoneNo: "",
// };
const PaymentUI = ({ userDetail, setUserDetail, setChange }) => {
  const classes = useStyle();
  const [today, setToday] = useState("");

  //   const [userDetail, setUserDetail] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetail({ ...userDetail, id: Date.now() });

    console.log(userDetail);
  };
  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  const backHandler = () => {
    setChange(1);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBalanceIcon />
        </Avatar>
        <Typography variant="h5">{"Payment Page"}</Typography>
        <div style={{ display: "flex" }}>
          {/* <form className={classes.form} onSubmit={handleSubmit}> */}
        </div>
        <center
          style={{
            marginLeft: "-47px",
            marginTop: "15px",
          }}
        >
          <Grid container spacing={2}>
            <Avatar className={classes.avatar} onClick={backHandler}>
              {/* <ShoppingCartIcon /> */}
              <ArrowBackIcon />
            </Avatar>
            <Typography
              variant="h6"
              style={{
                marginTop: "1rem",
                marginLeft: "2rem",
              }}
            >
              {"Amount"}: {userDetail?.price}
              <div>
                <PaymentPage
                  userDetail={userDetail}
                  setUserDetail={setUserDetail}
                />
              </div>
            </Typography>
          </Grid>
        </center>
        {/* </form> */}
      </Paper>
    </Container>
  );
};

export default PaymentUI;
