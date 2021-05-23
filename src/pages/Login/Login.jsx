import { ErrorMessage, Field, Form, Formik } from "formik";
import get from "get-value";
import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import useFetch from "use-http";
import * as Yup from "yup";
import { API_END_POINT, DOMAINPATH } from "../../redux/ActionTypes";
import reduxStore from "../../redux/store";
import { setToastMessage } from "../../utils/utils";
import "./styles.scss";

const store = get(reduxStore, "store", {});

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(5, "Password is too short - should be 5 chars minimum."),
});

export function LoginForm(props) {
  const { post, response, loading, error } = useFetch(API_END_POINT);

  useEffect(() => {
    document.title = "Login to PlatyPlus";
  }, []);

  const HandleSignIn = async (formData) => {
    const postResponse = await post("auth/login", formData);
    if (
      get(response, "ok", true) &&
      get(postResponse, "status", "").toLowerCase() !== "error"
    ) {
      store.dispatch({
        type: "LOGINUSER",
        payload: {
          username: get(formData, "username", ""),
          token: get(postResponse, "token", ""),
        },
      });
      setToastMessage({
        status: "success",
        message: "Login SuccessFully",
      });
      props.history.push(DOMAINPATH);
    } else {
      setToastMessage({
        status: "fail",
        message: "Login Failed !!",
      });
    }
  };

  return (
    <Container className="login-container">
      <Row>
        <h1 className="mt-5 text-center">Welcome</h1>
      </Row>
      <Row className="justify-content-center">
        <Col lg="6">
          <Formik
            initialValues={{ username: "johnd", password: "m38rmF$" }}
            validationSchema={loginSchema}
            onSubmit={HandleSignIn}
          >
            {({ touched, errors }) => (
              <Form>
                <FormGroup>
                  <FormLabel htmlFor="username">User Name</FormLabel>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter user name"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="username"
                    className="invalid-feedback"
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </FormGroup>
                <Button variant="outline-dark" type="submit" className="w-100">
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
