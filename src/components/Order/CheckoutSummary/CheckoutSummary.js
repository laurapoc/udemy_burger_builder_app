import React from "react";

import { NavLink } from "react-router-dom";
import Burger from "../../Burger/Burger";
import Button from "../../../components/UI/Button/Button";

import classes from "./CheckoutSummary.module.css";
import BurgerBuilder from "../../../containers/BurgerBuilder/BurgerBuilder";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <NavLink to="/">
        <Button clicked btnType="Danger">
          CANCEL
        </Button>
      </NavLink>
      <Button clicked btnType="Success">
        COUNTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
