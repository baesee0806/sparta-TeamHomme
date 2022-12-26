import { createStore } from "redux";
import { combineReducers } from "redux";
import modal from "../modules/modal";
import modifymodal from "../modules/modifymodal";
import comments from "../modules/modules";

const rootReducer = combineReducers({
  comments: comments,
  modal: modal,
  modifymodal: modifymodal,
});
const store = createStore(rootReducer);

export default store;
