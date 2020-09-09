import React from "react";
import PropTypes from 'prop-types';
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

//returns an array of interviewers with appropriate styling at its initial state and when preselected
export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={() => props.setInterviewer(interviewer.id)}
      />
    );
  });
  
  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
      {interviewers}
    </ul>
  </section> 
  )
};

//testing
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};
