import "./App.css";
import { useState } from "react";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  const [show, setShow]= useState(true);
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>{
        setShow((prev)=>{
          if(prev== true){
            return false;
          }
          else{
            return true;
          }
        })
      }}>
        {/* Show text Add House or Show Rentals based on state */}
        {show?"Hide":"Show"}
      </button>
      {show?<AddHouse/>:""}
      {show?<Rentals/>:""}
      
        
      {/* Show component based on state */}

      <br />
    </div>
  );
}

export default App;
