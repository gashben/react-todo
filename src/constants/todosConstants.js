export const TODOS_LIST = 'TODOS_LIST';
export const triggerReducer = (type, extra = {}) => ({
  type,
  ...extra,
});
