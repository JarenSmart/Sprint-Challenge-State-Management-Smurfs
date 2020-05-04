import React from "react";
import { connect } from "react-redux";

import "./Smurf.css";

const Smurf = (props) => {
  return (
    <div className="new-smurf-wrapper">
      {props.smurfs.map((smurf) => (
        <div className="new-smurf" key={smurf.id}>
          <h3>Name: {smurf.name} </h3>
          <h3>Age: {smurf.age} </h3>
          <h3>Height: {smurf.height}cm </h3>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
});

export default connect(mapStateToProps, {})(Smurf);
