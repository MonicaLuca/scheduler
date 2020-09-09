//returns an array of appointments objects for a given day
export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];
  let appointmentsForDay = undefined;
  for (let dayObj of state.days) {
      if (dayObj.name === day) 
         appointmentsForDay =  dayObj.appointments
  };
  if (!appointmentsForDay) return [];
  const result = [];
  for (let appointment in state.appointments) {
     if (appointmentsForDay.includes(state.appointments[appointment].id)) { 
        result.push(state.appointments[appointment]);
     }
  };
  return result;
};

//returns an interview
export function getInterview(state, interviewer) {
  if (interviewer) {
    let result = {};
    for (let interviewObj in state.interviewers) {
      if (state.interviewers[interviewObj].id === interviewer.interviewer) {
      result = {
          student: interviewer.student,
          interviewer: state.interviewers[interviewObj]
        }
      }
    }
    return result 
  } else {
    return null
  };
};

//returns an array of interviewer objects for a given day
export function getInterviewersForDay(state, day){
  if (state.days.length === 0) return [];
  let interviewersForDay = undefined;
  for (let dayObj of state.days) {
      if (dayObj.name === day) 
        interviewersForDay =  dayObj.interviewers;
  }
  if (!interviewersForDay) return [];
  const result = [];
  for (let interviewer in state.interviewers) {
     if (interviewersForDay.includes(state.interviewers[interviewer].id)) { 
        result.push(state.interviewers[interviewer]);
     }
  };
  return result
};

