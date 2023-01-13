import React, { useEffect, useState } from "react";
import { allProduct } from "../../action/product";
import CardUI from "./CardUI";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const AllOrder = () => {
  const [orderData, setOrder] = useState([]);
  useEffect(async () => {
    try {
      const s = await allProduct();
      const t = s.data.filter((data) => data.id != undefined);
      console.log(t, "ss");

      setOrder(t);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Grid
      container
      spacing={2}
      style={{ marginLeft: "0rem", marginTop: "0rem" }}
    >
      {/* <Grid item xs={12}> */}
      {orderData.map((data) => (
        <Grid xs={4}>
          <CardUI data={data} />
        </Grid>
      ))}
      {/* </Grid> */}

      {/* </Grid> */}
    </Grid>
    // <div style={{ display: "flex", margin: "2rem" }}>

    // </div>
  );
};

export default AllOrder;
