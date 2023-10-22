import { GET_LIST_HOME, REG_LOGIN, ABOUT_PAGE } from "../../actions/userAction";
import { ADD_LOGIN } from "../../component/Login";

const initialState = {
  getlisthomeResult: false,
  getlisthomeLoading: false,
  getlisthomeError: false,

  addLoginResult: false,
  addLoginLoading: false,
  addLoginError: false,

  regLoginResult: false,
  regLoginLoading: false,
  regLoginError: false,

  aboutResult: false,
  aboutLoading: false,
  aboutError: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_HOME:
      return {
        ...state,
        getlisthomeResult: action.payload.data,
        getlisthomeLoading: action.payload.loading,
        getlisthomeError: action.payload.errorMessage,
      };

    case ADD_LOGIN:
      // console.log("4. Masuk Reducer :", action);
      return {
        ...state,
        addLoginResult: action.payload.data,
        addLoginLoading: action.payload.loading,
        addLoginError: action.payload.errorMessage,
      };
    case REG_LOGIN:
      console.log("4. Masuk Reducer :", action);
      return {
        ...state,
        regLoginResult: action.payload.data,
        regLoginLoading: action.payload.loading,
        regLoginError: action.payload.errorMessage,
      };
    case ABOUT_PAGE:
      console.log("4. Masuk Reducer :", action);
      return {
        ...state,
        aboutResult: action.payload.data,
        aboutLoading: action.payload.loading,
        aboutError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default user;
