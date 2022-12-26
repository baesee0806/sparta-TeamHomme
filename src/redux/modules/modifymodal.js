const SHOW_M_MODAL = "SHOW_M_MODAL";
const HIDE_M_MODAL = "HIDE_M_MODAL";

export const showModifyModal = (payload) => {
  return {
    type: SHOW_M_MODAL,
    payload,
  };
};

export const hideModifyModal = (payload) => {
  return {
    type: HIDE_M_MODAL,
    payload,
  };
};

const initialState = {
  show: false,
  MmodalId: 0,
};

const modifymodal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_M_MODAL:
      return {
        show: true,
        MmodalId: action.payload,
      };
    case HIDE_M_MODAL:
      return {
        show: false,
        MmodalId: 0,
      };
    default:
      return state;
  }
};

export default modifymodal;
