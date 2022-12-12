import './App.css';
import { useState } from 'react';
import { data } from './data';
import Sound from './Sound';


function App() {

const [ music ] = useState(data);

return (
    <div className="App">
      <div id="drum-machine">
        <h1>DRUM MACHINE</h1>
      <div   id="key-pads">

    {music.map((elem => (
  
    <Sound audio = {elem.audio} keyCode = {elem.keyCode} keyTrigger = {elem.keyTrigger} display = {elem.display} />
    
    )))}
      </div>
     </div>
   </div>
  
  );
}

export default App;
