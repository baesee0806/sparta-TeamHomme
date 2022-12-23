import { createStore } from "redux";
import { combineReducers } from "redux";
import modal from "../modules/modal";
import comments from "../modules/modules";

const rootReducer = combineReducers({
  comments: comments,
  modal: modal,
});
const store = createStore(rootReducer);

export default store;
