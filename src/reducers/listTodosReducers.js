import {
  TODOS_LIST_FAIL, TODOS_LIST_REQUEST, TODOS_LIST_REST, TODOS_LIST_SUCCESS,
} from '../constants/todosConstants';

export const listTodosReducers = (state = { myList: [] }, action) => {
  switch (action.type) {
    case TODOS_LIST_REQUEST:
      return { loading: true };
    case TODOS_LIST_SUCCESS:
      return { loading: false, myList: action.payload };
    case TODOS_LIST_FAIL:
      return { loading: false, myList: action.payload };
    case TODOS_LIST_REST:
      return { myList: [] };
    default:
      return state;
  }
};

export const listTodosReducershhhhhhhhhh = (state = { myList: [] }, action) => {
  switch (action.type) {
    case TODOS_LIST_REQUEST:
      return { loading: true };
    case TODOS_LIST_SUCCESS:
      return { loading: false, myList: action.payload };
    case TODOS_LIST_FAIL:
      return { loading: false, myList: action.payload };
    case TODOS_LIST_REST:
      return { myList: [] };
    default:
      return state;
  }
};
