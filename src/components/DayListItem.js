import React from "react";
import classnames from 'classnames/bind';
import "./DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classnames("day-list__item ", {
    "day-list__item": props,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  //returns a statement detailing the number of spots remaining
  const formatSpots = props.spots === 1 ? `${props.spots} spot remaining` : props.spots === 0 ? `no spots remaining` : `${props.spots} spots remaining`;

  return (
    <li 
      className = {dayClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day" 
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots}</h3>
    </li>
  );
};