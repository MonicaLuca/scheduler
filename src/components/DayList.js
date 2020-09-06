import React from "react";
import DayListItem from "./DayListItem";

//exports an array with styling of the selection of dates a user can pick from
export default function DayList(props) {
  console.log(props.days)
return (
  <ul>
       {props.days.map((day) => 
       <DayListItem 
       key={day.id} 
       name={day.name} 
       spots={day.spots} 
       selected={day.name === props.day}
       setDay={props.setDay}  />)}

  </ul>
)
}