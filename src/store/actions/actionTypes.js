const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  // //admin
  //gender
  FETCH_GENDER_START: "FETCH_GENDER_START",
  FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
  FETCH_GENDER_FAILED: "FETCH_GENDER_FAILED",
  //role
  FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
  FETCH_ROLE_FAILED: "FETCH_ROLE_FAILED",
  //position
  FETCH_POSITION_SUCCESS: "FETCH_POSITION_SUCCESS",
  FETCH_POSITION_FAILED: "FETCH_POSITION_FAILED",
  //save user
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_FAILED: "CREATE_USER_FAILED",
  //read data
  FETCH_ALL_USER_SUCCEED: "FETCH_ALL_USER_SUCCEED",
  FETCH_ALL_USER_FAILED: "FETCH_ALL_USER_FAILED",
  //del
  DELETE_USER_SUCCEED: "DELETE_USER_SUCCEED",
  DELETE_USER_FAILED: "DELETE_USER_FAILED",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",
});

export default actionTypes;
