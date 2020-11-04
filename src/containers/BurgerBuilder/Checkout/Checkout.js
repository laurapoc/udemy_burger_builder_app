import React, {Component} from "react";
import CheckoutSummary from "../../../components/Order/CheckoutSummary/CheckoutSummary";


class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }


componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
        // ["salad", "1"]
        ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients: ingredients});
}

checkoutCancelledHandler = () => {
    // console.log (this.props.history);
    // this.props.history.ingredients = this.state.ingredients;
    this.props.history.goBack();
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
    // }
    // const queryString = queryParams.join("&");
    // this.props.history.push({
    //   pathname: "/",
    //   search: "?" + queryString
    // });
    // console.log (this.state.ingredients);
    
}

checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
}


    render() {
        
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler} />
            </div>
        );
    }
}

export default Checkout;