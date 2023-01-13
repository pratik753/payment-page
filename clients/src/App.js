import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaymentPage from "./components/pages/HomePage";
import { useSelector } from "react-redux";
import HomePage from "./components/pages/HomePage";
import NavBar from "./components/pages/NavBar";
import AllOrder from "./components/Form/AllOrder";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/allOrder" exact>
          <AllOrder />
        </Route>

        <Route path="/paymentpage" exact>
          <PaymentPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
