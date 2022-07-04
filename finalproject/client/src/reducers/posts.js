import {
  SET_POST,
  SET_POSTS,
  RESET_POSTS,
  DONATE_POST,
  DELETE_POST,
  ADD_NEW_POST,
  ADD_POST_UPDATE,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_FULFILLED,
  FETCH_POSTS_REJECTED,
} from "../actions/posts";

const INITIAL_STATE = {
  list: [],
  singlePost: {},
  isLoading: false,
  isNoMore: false,
};

export default function fetchPosts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return { ...state, isLoading: true };

    case FETCH_POSTS_FULFILLED:
      return action.payload.length === 0
        ? {
            ...state,
            isNoMore: true,
            isLoading: false,
          }
        : {
            ...state,
            list: [...state.list, ...action.payload],
            isLoading: false,
          };

    case FETCH_POSTS_REJECTED:
      return { ...state, isLoading: false };

    case RESET_POSTS:
      return INITIAL_STATE;

    case SET_POSTS:
      return {
        ...state,
        list: action.payload,
      };

    case SET_POST:
      return {
        ...state,
        singlePost: action.payload,
      };

    case ADD_NEW_POST:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };

    case DELETE_POST:
      let tempList = [...state.list];
      tempList = tempList.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        list: tempList,
      };

    case DONATE_POST:
      let donate_tempList = [...state.list];
      let tempSinglePost = {};
      let postIndex = donate_tempList.findIndex(
        (post) => post.id === action.payload.postId
      );
      if (postIndex >= 0) {
        let tempPost = donate_tempList[postIndex];
        tempPost.collectedAmount = action.payload.postCollectedAmount;
        donate_tempList.splice(postIndex, 1, tempPost);
      }
      if (state.singlePost?.id) {
        tempSinglePost = { ...(state.singlePost || {}) };
        tempSinglePost.collectedAmount = action.payload.postCollectedAmount;
        tempSinglePost.donarDetail = [
          action.payload,

          ...(tempSinglePost?.donarDetail || []),
        ];
      }
      return {
        ...state,
        list: donate_tempList,
        singlePost: tempSinglePost,
      };

    case ADD_POST_UPDATE:
      let tempPostUpdate = { ...(state.singlePost || {}) };
      tempPostUpdate.postUpdates = [
        action.payload,
        ...(tempPostUpdate.postUpdates || [] ),
      ];
      return {
        ...state,
        singlePost: tempPostUpdate,
      };

    default:
      return state;
  }
}