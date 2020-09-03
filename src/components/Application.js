import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview } from "./helpers/selectors";



export default function Application(props) {


const setDay = day => 
{
  setState( prev => ({ ...prev, day }))
};


  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  //renders data for days (nav bar)
  useEffect(() =>{
  
      Promise.all([
        Promise.resolve(axios.get("/api/days")),
        Promise.resolve(axios.get("/api/appointments")),
        Promise.resolve(axios.get("api/interviewers")),
      ]).then((all) => {
        setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      });
  }, []);

  console.log("interviewers", state.interviewers)
  const appointments = getAppointmentsForDay(state, state.day)
  
    return (
      <main className="layout">
        <section className="sidebar">
              <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu"> 
      <DayList 
        days={state.days} 
        day={state.day} 
        setDay={setDay} 
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
        </section>
        <section className="schedule">
          {appointments.map(appointment => (
            <Appointment 
            key={appointment.id}
            {...appointment}
            interview={getInterview(state, appointment.interview)}
            />
          )) }
        <Appointment key="last" time="5pm" />
        </section>

      </main>
    );
 
}

