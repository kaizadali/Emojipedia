import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function createEntry(data){
 return (
   <Entry 
    
    key={data.id}
    emoji={data.emoji}
    name={data.name}
    meaning={data.meaning}
   />
 );
}
function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
