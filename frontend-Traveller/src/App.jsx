import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./components/Loading/loading.css"
import HomePage from "./pages/HomePage/HomePage"
import Packages from "./pages/PackagePage/Packages"
import AboutUs from "./pages/AboutUs/AboutUs"
import ContactUs from "./pages/ContactUs/ContactUs"
import Detail from "./pages/Detail/Detail"
import { Globalstyle } from "./style"
import Register from "./components/Register"
import Signin from "./components/Signin/Signin"
import UserPage from "./pages/UserPage/UserPage"
import ForgotPwdPage from "./pages/ForgotPassword/ForgotPwdPage"
import ResetPwdPage from "./pages/ForgotPassword/ResetPwdPage"
import MyBookings from "./pages/MyBookings/MyBookings"
import ReviewPage from "./pages/ReviewPage/ReviewPage"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/packages" exact component={Packages} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/tours/:slug" exact component={Detail} />
        <Route path="/register" exact component={Register} />
        <Route path="/sign-in" exact component={Signin} />
        <Route path="/user" exact component={UserPage} />
        <Route path="/forgot-password" exact component={ForgotPwdPage} />
        <Route path="/forgot-password/reset" exact component={ResetPwdPage} />
        <Route path="/user/bookings" exact component={MyBookings} />
        <Route path="/user/reviews" exact component={ReviewPage} />
      </Switch>
      <Globalstyle />
    </BrowserRouter>
  )
}

export default App
