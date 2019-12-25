import React, { Component } from "react";
import { connect } from "react-redux";

import { DeleteTodo } from "../store/actions/DeleteTodo";
import { EditTodo } from "../store/actions/EditTodo";

class TodoList extends Component {
  state = {
    edit: false
  };

  save = () => {
    const { id, todo } = this.state;
    this.props.EditTodo(id, todo);
    this.setState({
      edit: false
    });
  };

  render() {
    return (
      <div>
        {this.state.edit ? (
          <div style={{ margin: "15px" }}>
            <form onSubmit={e => e.preventDefault()}>
              <input
                value={this.state.todo}
                onChange={e => this.setState({ todo: e.target.value })}
                styles={{ width: "300px", height: "100px" }}
              ></input>
              <button
                style={{
                  width: "100px",
                  height: "25px",
                  backgroundColor: "#0091a1",
                  color: "white",
                  border: 0,
                  margin: "0px 10px"
                }}
                onClick={() => this.save()}
              >
                Save
              </button>
            </form>
          </div>
        ) : null}

        {this.props.todos.map(todo => {
          if (!this.state.edit) {
            return (
              <li
                key={todo.id}
                style={{
                  listStyleType: "none",
                  fontSize: "20px"
                }}
              >
                {`ID: ${todo.id}, `}
                {` Todo: ${todo.text}`}
                <button
                  onClick={() => this.props.DeleteTodo(todo.id)}
                  style={{
                    width: "100px",
                    height: "25px",
                    backgroundColor: "#fc3003",
                    color: "white",
                    border: 0,
                    margin: "0px 10px"
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    this.setState({ edit: true, todo: todo.text, id: todo.id })
                  }
                  style={{
                    width: "100px",
                    height: "25px",
                    backgroundColor: "#9837BF",
                    color: "white",
                    border: 0
                  }}
                >
                  Edit
                </button>
              </li>
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.AddTodoReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    DeleteTodo: id => {
      dispatch(DeleteTodo(id));
    },
    EditTodo: (id, todo) => {
      dispatch(EditTodo(id, todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
