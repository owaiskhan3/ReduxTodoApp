export const DeleteTodo = id => {
  console.log(id);
  return {
    type: "DELETETODO",
    payload: {
      id
    }
  };
};
