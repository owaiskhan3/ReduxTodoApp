export const EditTodo = (id, todo) => {
  console.log(id);
  return {
    type: "EDIT_TODO",
    payload: {
      id,
      todo
    }
  };
};
