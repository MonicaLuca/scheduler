import React from "react";
// import classnames from 'classnames/bind'
// import "./InterviewerList.scss";
// import InterviewerListItem from "./InterviewerListItem";
import "./styles.scss";


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
  )
};