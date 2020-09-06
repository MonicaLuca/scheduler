import React from "react";
import "./styles.scss";
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import Form from "./Form"
import Status from "./Status"
import Confirm from "./Confirm"
import useVisualMode from "../hooks/useVisualMode"

export default function Appointment(props) {
  const EMPTY="EMPTY"
  const SHOW="SHOW"
  const CREATE="CREATE"
  const SAVING="SAVING"
  const DELETING="DELETING"
  const CONFIRM = "CONFIRM"

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY );
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING)

    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))

  }

  function deleteApp(confirmation){
    if(!confirmation){
      transition(CONFIRM)
    }
    if(confirmation){
      transition(DELETING, true)
      props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
    }
  }



  return (
  <article className="appointment">  
  <Header time={props.time}/>
  {mode === DELETING && <Status message={"Deleting"} />}
  {mode === SAVING && <Status message={"Saving"} />} 
  {mode === EMPTY && <Empty onAdd={() => { return transition(CREATE)}} />}
  {mode === SHOW && (
  <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
    onDelete={() => deleteApp(false)}
  />
  )}
  {mode === CREATE &&(
    <Form 
    interviewers={props.interviewers} 
    onSave={save} 
    onCancel={() => {return back()}} />
  )} 
  
  {mode === CONFIRM && (
    <Confirm 
    message={"Are you sure you would like to delete?"}
    onCancel={back}
    onConfirm={() => deleteApp(true)}
    />
  )}
  </article>
  )
};