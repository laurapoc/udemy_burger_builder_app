import React, { useState, useEffect } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setEroor] = useState(null);

    // In this case, if using componentDidMount(),
    // in Orders.js error message does not appears

    const reqInterceptor = axios.interceptors.request.use((req) => {
      setEroor(null);
      return req;
    });
    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        setEroor(err);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.response.eject(resInterceptor);
        axios.interceptors.request.eject(reqInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
       setEroor(null);
    };

    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
