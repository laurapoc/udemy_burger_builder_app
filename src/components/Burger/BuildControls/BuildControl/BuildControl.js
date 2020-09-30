import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = (props) => (

    <div className={classes.BuildControl}>
      <div className={classes.label}>{props.label}</div>
      <div className={classes.BuildControlButtonDiv}>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>
          Less
        </button>
        <button className={classes.More} onClick={props.added}>
          More
        </button>
      </div>
    </div>

);

export default buildControl;
