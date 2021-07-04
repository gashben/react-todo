/* eslint-disable import/prefer-default-export */
import { TODOS_LIST } from '../constants/todosConstants';

export const ListTodosReducer = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case TODOS_LIST: {
      return data;
    }
    default:
      return state;
  }
};
