import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../store/actions/AddTodo";

function AddTodo(props) {
  let inp = "";

  const AddTodo = () => {
    if (inp.value !== "") {
      props.addTodo(inp.value);
      inp.value = "";
    } else {
      alert("Please Enter Todo");
    }
  };
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          ref={node => (inp = node)}
          value={inp.value}
          style={{ width: "250px", marginRight: "20px" }}
        ></input>
        <button
          onClick={() => AddTodo()}
          style={{
            width: "100px",
            height: "25px",
            backgroundColor: "#00b542",
            color: "white",
            border: 0
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return { text: state.text };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
