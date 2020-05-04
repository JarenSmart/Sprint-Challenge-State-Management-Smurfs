import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleSubmit = (e) => {
    console.log(newSmurf);

    e.preventDefault();
    props.addSmurf(newSmurf);
  };

  const handleChange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="new-smurf-form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name..."
          type="text"
          name="name"
          value={props.name}
          onChange={handleChange}
        />
        <input
          placeholder="Age..."
          type="num"
          name="age"
          value={props.age}
          onChange={handleChange}
        />
        <input
          placeholder="Height..."
          type="text"
          name="height"
          value={props.height}
          onChange={handleChange}
        />
        <input type="submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  smurf: state.smurf,
});

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
