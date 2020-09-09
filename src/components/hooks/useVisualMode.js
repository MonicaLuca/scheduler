import { useState } from "react";

//custom hook that returns functions including: mode, transition, and back
export default function VisualMode(initial){
  const [history, setHistory] = useState([initial])

  //function transitions into a different mode and updates the history
  function transition(newMode, replace = false){
    if(!replace){
      setHistory([...history, newMode])
    } else {
      setHistory([...history.slice(0, history.length -1), newMode])
    }
  };

  //function renders the previous state
  function back(){
    if (history.length > 1) {
      const newHistory = [...history.slice(0, history.length -1)];
      setHistory(newHistory)
    }
  };

  //returns functions from useVisualMode hook that can be imported and reused
  return {mode:history[history.length-1], transition, back}
}; 