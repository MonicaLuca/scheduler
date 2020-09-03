export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];
  // find correct and remove appointments
  let appointmentsForDay = undefined;
  for (let dayObj of state.days) {
      if (dayObj.name === day) 
         appointmentsForDay =  dayObj.appointments;
  }
  if (!appointmentsForDay) return [];
  const result = [];
  for (let appointment in state.appointments) {
     if (appointmentsForDay.includes(state.appointments[appointment].id)){ 
        result.push(state.appointments[appointment]);
     }
  }
  return result;
}


export function getInterview(state, interviewer){
    if(interviewer){
      let result = {}
      for (let interviewObj in state.interviewers){
        if (state.interviewers[interviewObj].id === interviewer.interviewer) {
        result = {
            student: interviewer.student,
            interviewer: state.interviewers[interviewObj]
          }

        }
      }
      return result 
    } else{
      return null
    }
}