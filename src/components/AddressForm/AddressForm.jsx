import { Formik } from "formik";
import React from "react";
import { Button, Col, InputGroup, Row, Form } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import * as Yup from "yup";
// import "./styles.scss";
import { Container, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { ErrorMessage, Field } from "formik";
import get from "get-value";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  address2: Yup.string(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const AddressForm = (props = {}) => {
  const { prefillData = {} } = props;

  const onSubmit = async (values, formikProps) => {
    const { setSubmitting, resetForm } = formikProps;
    const { onAddressSubmit = () => {} } = props;
    setSubmitting(true);
    onAddressSubmit(values);
    // setTimeout(() => {
    //   console.log("resolved timeout at onSubmit");
    // }, 5000);
    // resetForm();
    setSubmitting(false);
  };
  console.log("prefillData ", prefillData);
  return (
    <div className={"address-form d-flex justify-content-center my-3"}>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          firstName: get(prefillData, "firstName", ""),
          lastName: get(prefillData, "lastName", ""),
          address: get(prefillData, "address", ""),
          address2: get(prefillData, "address2", ""),
          city: get(prefillData, "city", ""),
          state: get(prefillData, "state", ""),
          zip: get(prefillData, "zip", ""),
          email: get(prefillData, "email", ""),
          terms: get(prefillData, "terms", false),
        }}
      >
        {(formikProps = {}) => {
          const {
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting,
          } = formikProps;
          console.log("values ", values);
          return (
            <Form style={{ maxWidth: "80%" }} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group md="6" as={Col} controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.address}
                    isValid={touched.firstName && !errors.firstName}
                  />
                  <Form.Control.Feedback
                    type={!errors.firstName ? "valid" : "invalid"}
                  >
                    {!errors.firstName ? "Looks good!" : errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.lastName}
                    isValid={touched.lastName && !errors.lastName}
                  />
                  <Form.Control.Feedback
                    type={!errors.lastName ? "valid" : "invalid"}
                  >
                    {!errors.lastName ? "Nice" : errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormikAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1234 Main St"
                    aria-describedby="inputGroupPrepend"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Apartment, studio, or floor"
                    aria-describedby="inputGroupPrepend"
                    name="address2"
                    value={values.address2}
                    onChange={handleChange}
                    isInvalid={!!errors.address2}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    isInvalid={!!errors.zip}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3 justify-content-between">
                <Form.Group as={Col} md="5">
                  <Form.Check
                    name="terms"
                    label="Agree to terms and conditions"
                    checked={values.terms}
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    id="validationFormik0"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" className="text-end">
                  <Button disabled={isSubmitting} variant="dark" type="submit">
                    Save and Continue
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export { AddressForm };
