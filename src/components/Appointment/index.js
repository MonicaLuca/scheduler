import React from "react";
import "./styles.scss";
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import Form from "./Form"
import Status from "./Status"
import useVisualMode from "../hooks/useVisualMode"

export default function Appointment(props) {
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING)

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))

  }
  
  const EMPTY="EMPTY"
  const SHOW="SHOW"
  const CREATE="CREATE"
  const SAVING="SAVING"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY );

  return (
  <article className="appointment">  
  <Header time={props.time}/>
  {mode === SAVING && <Status message={"Saving"} />} 
  {mode === EMPTY && <Empty onAdd={() => { return transition(CREATE)}} />}
  {mode === SHOW && (
  <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
  />
  )}
  {mode === CREATE &&(
    <Form 
    interviewers={props.interviewers} 
    onSave={save} 
    onCancel={() => {return back()}} />
  )}  
  </article>
  )
};