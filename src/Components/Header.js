import React from "react";

export default function Header() {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "navy",
    color: "white",
    fontStyle: "italic",
    margin: "50px 0px"
  };

  return (
    <div style={styles}>
      <h1>TodoApp</h1>
    </div>
  );
}
