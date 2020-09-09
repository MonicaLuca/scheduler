import React from "react";
import "./styles.scss";

//exports Empty component which indicates an empyt appointment time slot
export default function Empty(props) {

  return (
    <main className="appointment__add">
    <img
      className="appointment__add-button"
      src="images/add.png"
      alt="Add"
      onClick={props.onAdd}
    />
  </main>
  );
};