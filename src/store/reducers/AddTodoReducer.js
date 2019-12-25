let initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case "DELETETODO": {
      return state.filter(todo => todo.id !== action.payload.id);
    }
    case "EDIT_TODO": {
      let todos = state;

      todos.forEach(todo => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.todo;
        }
      });

      return state;
    }
    default:
      return state;
  }
};

export default todos;
