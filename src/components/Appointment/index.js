import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "../hooks/useVisualMode";

//exports Appointment componenet
export default function Appointment(props) {
  
  //Transition Views
  const EMPTY="EMPTY";
  const SHOW="SHOW";
  const CREATE="CREATE";
  const SAVING="SAVING";
  const DELETING="DELETING";
  const CONFIRM="CONFIRM";
  const EDIT="EDIT";
  const ERROR_SAVE ="ERROR_SAVE";
  const ERROR_DELETE="ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY );
  
  //Save an appointment
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error)=> transition(ERROR_SAVE, true));
  };
  
  //Delete an appointment
  function deleteApp(confirmation) {
    if (!confirmation) {
      transition(CONFIRM)
    };
    if (confirmation) {
      transition(DELETING, true)
      props.cancelInterview(props.id)
        .then(() => transition(EMPTY))
        .catch((error)=> transition(ERROR_DELETE, true))
    };
  };

  //returns appropriate mode
  return (
    <article className="appointment" data-testid="appointment">  
      <Header time={props.time}/>

      { mode === DELETING && 
        <Status message={"Deleting"} />}
      
      { mode === SAVING && 
        <Status message={"Saving"} />}
      
      { mode === EMPTY && 
        <Empty onAdd={() => { return transition(CREATE)}} />}
      
      { mode === SHOW &&(
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => deleteApp(false)}
          onEdit={() => transition(EDIT)}
        />
      )}
      
      { mode === CREATE &&(
        <Form 
          interviewers={props.interviewers} 
          onSave={save} 
          onCancel={back} 
        />
      )} 
      
      { mode === CONFIRM && (
        <Confirm 
          message={"Are you sure you would like to delete?"}
          onCancel={back}
          onConfirm={() => deleteApp(true)}
        />
      )}
      
      { mode === EDIT && (
        < Form 
          name={props.interview.student} 
          interviewer={props.interview.interviewer.id} 
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />
      )}

      { mode === ERROR_SAVE && (
        <Error 
          message="Could not save appointment"
          onClose={back}
        />
      )}
      { mode === ERROR_DELETE && (
        <Error 
          message="Could not delete appointment"
          onClose={back}
        />
      )}
    </article>
  );
};