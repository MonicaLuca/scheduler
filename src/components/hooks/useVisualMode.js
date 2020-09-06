import { useState } from "react";
// import { __esModule } from "@testing-library/react/dist";

export default function VisualMode(initial){
  const [history, setHistory] = useState([initial])


  function transition(newMode, replace = false){
    if(!replace){
      setHistory([...history, newMode])
    } else {
      setHistory([...history.slice(0, history.length -1), newMode])
    }

  }
  function back(){
  
    if (history.length > 1) {
      const newHistory = [...history.slice(0, history.length -1)];
      setHistory(newHistory)

    }
  }
  return {mode:history[history.length-1], transition, back}

} 