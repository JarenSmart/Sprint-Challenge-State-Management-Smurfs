import React from "react";
import { connect } from "react-redux";

const Smurf = (props) => {
  return (
    <div className="new-smurf">
      {props.smurfs.map((smurf) => (
        <div className="new-smurf">
          <h3>name: {smurf.name} </h3>
          <h3>age: {smurf.age} </h3>
          <h3>height: {smurf.height} </h3>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
});

export default connect(mapStateToProps, {})(Smurf);
