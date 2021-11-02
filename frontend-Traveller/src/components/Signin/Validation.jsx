/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from "react"
import { connect } from "react-redux"
import { Formik } from "formik"
import * as Yup from "yup"
import * as actionCreators from "../Header/store/actionCreators"

import {
  Title,
  Input,
  Errors,
  RememberLabel,
  ForgotPassword,
  SigninButton,
} from "./styles/signin"

const InputWrapper = (props) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    //********Using Yum for validation********/
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email cannot be empty"),
      password: Yup.string()
        .required("Password cannot be empty")
        .min(8, "Password is too short - should be 8 chars minimum."),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        props.login(values)
        setSubmitting(false)
      }, 500)
    }}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props

      return (
        <form onSubmit={handleSubmit}>
          <Title>Email</Title>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email address..."
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email}
          />
          {errors.email && touched.email && <Errors>{errors.email}</Errors>}
          <Title style={{ marginTop: "28px" }}>Password</Title>
          <Input
            name="password"
            type="password"
            placeholder="********"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password}
          />
          {errors.password && touched.password && (
            <Errors>{errors.password}</Errors>
          )}
          <div style={{ marginTop: "30px" }}>
            <RememberLabel>
              <input type="radio" /> Remember me
            </RememberLabel>
            <ForgotPassword href="/forgot-password">
              Forgot password?
            </ForgotPassword>
          </div>

          <SigninButton disabled={isSubmitting}>Sign in</SigninButton>
        </form>
      )
    }}
  </Formik>
)

const mapDispatchToProps = (dispatch) => ({
  login(values) {
    dispatch(actionCreators.login(values))
  },
})

export default connect(null, mapDispatchToProps)(InputWrapper)
