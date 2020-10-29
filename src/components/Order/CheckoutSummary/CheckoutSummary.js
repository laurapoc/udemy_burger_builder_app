import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../../components/UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button clicked btnType="Danger">CANCEL</Button>
      <Button clicked btnType="Success">CONTINUE</Button>
    </div>
  );
};

export default checkoutSummary;
