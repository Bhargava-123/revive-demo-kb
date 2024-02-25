import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginComponent from "../LoginComponent/LoginComponent";
import SignupComponent from "../SignupComponent/SignupComponent";
import { RequestPickupContextProvider } from "../../contexts/RequestPickUpContext";
import RequestPickupComponent from "../RequestPickupComponent/RequestPickupComponent";
import "../NavigationBarComponent/NavigationBarComponent.css";
import logo from "../NavigationBarComponent/logo.png";
import OrderFinalizeComponent from "../RequestPickupComponent/OrderSummaryComponent";
import RequestHistoryComponent from "../RequestHistory/RequestHistoryComponent"

const NavigationBarComponent = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/requestpickup">Request Pickup</Link>
          </li>
          <li>
            <Link to = "/requesthistory">Request History</Link>
          </li>
        </ul>
      </div>
      <RequestPickupContextProvider>
        <Routes>
          <Route exact path="/login" element={<LoginComponent />}></Route>
          <Route exact path="/signup" element={<SignupComponent />}></Route>
          <Route exact path="/requestpickup" element={<RequestPickupComponent />}></Route>
          <Route exact path="/proceed" element={<OrderFinalizeComponent />}></Route>
          <Route exact path="/requesthistory" element={<RequestHistoryComponent />}></Route>
        </Routes>
      </RequestPickupContextProvider>
    </Router>
  );
};

export default NavigationBarComponent;
