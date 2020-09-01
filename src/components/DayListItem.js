import React from "react";
import classnames from 'classnames/bind'
import "./DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item ", {
    "day-list__item": props,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  // const formatSpots = function (number){
  //   if (number === 1){
  //     return `${number} spot remaining`
  //   } else if (!number) {
  //     return `no spots remaining`
  //   } 
  //   return `${number} spots remaining`
  // }
  
  const formatSpots = props.spots === 1 ? `${props.spots} spot remaining` : props.spots === 0 ? `no spots remaining` : `${props.spots} spots remaining`;
  
  


  return (
    <li 
    className = {dayClass}
    onClick={() => props.setDay(props.name)} >
    <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots}</h3>
    </li>
  );
}