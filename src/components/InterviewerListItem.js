import React from "react";
import classnames from 'classnames/bind'
import "./InterviewerListItem.scss";


//returns an individual interviewer with name, avatar, and embedded styling when it is selected, unselected, and clickable
export default function InterviewerListItem(props) {
  const interviewerClass = classnames("interviewers-list__item ", {
    "interviewers__item": props,
    "interviewers__item--selected": props.selected,
  });
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src= {props.avatar}
      alt= {props.name}
    />
    {props.selected && props.name}
  </li>
  )
};