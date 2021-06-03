import { Formik } from "formik";
import React from "react";
import { Button, Col, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
// import "./styles.scss";
import { Container, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";

// const schema = Yup.object().shape({
//   firstName: Yup.string().required(),
//   lastName: Yup.string().required(),
//   addressLine1: Yup.string().required(),
//   addressLine2: Yup.string(),
//   city: Yup.string().required(),
//   state: Yup.string().required(),
//   zip: Yup.string().required(),
//   email: Yup.string().email().required(),
//   terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
// });

const AddressForm = () => {
  return <Form>CHECKOUT</Form>;
};

export { AddressForm };
