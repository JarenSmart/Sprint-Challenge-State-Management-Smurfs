import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/index";

import "./App.css";

import SmurfForm from "./SmurfForm";
import Smurf from "./Smurf";

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <br />
      <SmurfForm />
      <Smurf />
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { fetchData })(App);
