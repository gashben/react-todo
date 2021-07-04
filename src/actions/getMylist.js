import {
  TODOS_LIST,
  triggerReducer,
} from '../constants/todosConstants';

// eslint-disable-next-line import/prefer-default-export
export const listTodos = (data) => (dispatch) => {
  dispatch(triggerReducer(TODOS_LIST, { data }));
};
export const addTodo = (data) => (dispatch, getState) => {
  const { Todos } = getState();
  const result = [data, ...Todos];
  dispatch(triggerReducer(TODOS_LIST, { data: result }));
};
