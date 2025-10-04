import React, { Component, Suspense } from "react";
import routes from "../src/routes";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./assets/css/pe-icon-7.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/themes.scss";
import Footer from "./component/Footer";
import AppNavbar from "./component/AppNavbar";
import Hero from "./pages/Hero";
import Info from "./pages/Info";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar/>
        <Hero/>
        <Info/>
        <Services/>
        <CaseStudy/>
        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={route.component} key={idx} />
          ))}
        </Routes>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
