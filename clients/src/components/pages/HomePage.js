import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Product from "../Form/Product";
import Customer from "../Form/Customer";
import PaymentPage from "../Payment/PaymentPage";
import PaymentUI from "../Form/PaymentUI";
import AllOrder from "../Form/AllOrder";
function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function HomePage() {
  const [change, setChange] = useState(0);
  const [userDetail, setUserDetail] = useState({
    productName: "",
    price: "",
    id: "",
    date: "",
    name: "",
    email: "",
    phoneNo: "",
  });
  console.log(userDetail, "user");
  return (
    <>
      {change == 0 && (
        <Product
          userDetail={userDetail}
          setUserDetail={setUserDetail}
          setChange={setChange}
        />
      )}
      {change == 1 && (
        <Customer
          userDetail={userDetail}
          setUserDetail={setUserDetail}
          setChange={setChange}
        />
      )}
      {change == 2 && (
        <PaymentUI
          userDetail={userDetail}
          setUserDetail={setUserDetail}
          setChange={setChange}
        />
      )}
    </>
  );
}
