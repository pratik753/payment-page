import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

function appBarLabel(label, allOrderPage, homePage) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1 }}
        onClick={homePage}
      >
        {label}
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1 }}
        onClick={allOrderPage}
        style={{ color: "#0dbcf1" }}
      >
        {"All Order"}
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
export default function NavBar() {
  let history = useHistory();
  const allOrderPage = () => {
    history.push("/allOrder");
    // history.goBack();
  };
  const homePage = () => {
    history.push("/");
    // history.goBack();
  };
  return (
    <>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary">
            {appBarLabel("Product", allOrderPage, homePage)}
          </AppBar>
        </ThemeProvider>
      </Stack>
    </>
  );
}
