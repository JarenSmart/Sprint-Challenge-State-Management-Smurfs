import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export const ADDING_SMURF = "ADDING_SMURF";
export const ADDED_SMURF = "ADDED_SMURF";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED";

const baseUrl = "http://localhost:3333/smurfs";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCHING_DATA });

  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: FETCH_FAILED }));
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADDING_SMURF });

  axios
    .post(baseUrl, smurf)
    .then((data) => dispatch({ type: ADDED_SMURF, payload: data }))
    .catch((err) => dispatch({ type: ADD_SMURF_FAILED }));

  fetchData();
};
