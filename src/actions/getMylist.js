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

export const deleteTodo = (index) => (dispatch, getState) => {
  const { Todos } = getState();
  Todos.splice(index, 1);
  dispatch(triggerReducer(TODOS_LIST, { data: [...Todos] }));
};

export const handleUpdate = (item) => (dispatch, getState) => {
  const { Todos } = getState();
  const lastResulte = [...Todos].map((object) => {
    if (object.id === item.id) {
      return item;
    }
    return object;
  });
  dispatch(triggerReducer(TODOS_LIST, { data: lastResulte }));
};
