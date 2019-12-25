let id = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  payload: { text, id: id++ }
});
