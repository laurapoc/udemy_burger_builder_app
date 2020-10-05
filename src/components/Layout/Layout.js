import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component { 
  render () {
    return (
      <Aux>
      <Toolbar />
      <SideDrawer />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{this.props.children}</main>
    </Aux>
    )
  }
}

export default Layout;
