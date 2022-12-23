//action value
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

//action creator

export const addComment = (payload) => ({
  type: ADD_COMMENT,
  payload,
});

export const deleteComment = (payload) => ({
  type: DELETE_COMMENT,
  payload,
});

//initialState
const initialState = {
  comments: [
    {
      comment: "가나다",
      password: "1234",
      id: "",
    },
  ],
};

//reducer
const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default comments;
