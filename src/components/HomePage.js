import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const HomePage = () => {
  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_URL)
        .then((response) => response.json())
        .then((responseData) => console.log(responseData));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
