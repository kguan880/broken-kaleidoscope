import React from "react";

import Pixels from "./Pixels";

function App(){
  return(
    Array.from({length: 250}, (v,i)=>{
      return <Pixels key={i}/>
    })
  )
}

export default App;
