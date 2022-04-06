import {
  ADD_NEW_POST,
  DELETE_POST,
    FETCH_POSTS_FULFILLED,
    FETCH_POSTS_PENDING,
    FETCH_POSTS_REJECTED,
    RESET_POSTS,
  } from "../actions/posts";
  
  const INITIAL_STATE = {
    list: [],
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

        case ADD_NEW_POST:
          return {
            ...state,
            list: [action.payload, ...state.list]
          }

          case DELETE_POST:
            let tempList = [...state.list];
            console.log(tempList,action.payload)
            tempList = tempList.filter(({ id }) => id !== action.payload)
            return {
              ...state,
              list: tempList
            };
  
      default:
        return state;
    }
  }