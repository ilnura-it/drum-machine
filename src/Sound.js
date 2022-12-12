import { useState, useEffect } from 'react';


function Sound({ keyCode, keyTrigger, audio, display }) {

  const [displaykey, setDisplaykey] = useState(" ");
  const [stylecol, setStylecol] = useState({ backgroundColor: "rgb(201, 204, 213)" })

  useEffect(() => {
    window.addEventListener("keydown", handleMusicPlay);
    return () => {
      window.removeEventListener("keydown", handleMusicPlay);
    };
  }, []);

  const handleMusicPlay = (event) => {
    if (event.keyCode === keyCode) {
      playSound();
      setDisplaykey(display);
      setStylecol({ backgroundColor: "rgb(21, 114, 161)" })
    }
  }
  const playSound = () => {
    const sound = new Audio(audio);
    sound.play();
  }

  return (

    <div className='sound'>
      <div className="pads">
        <div style={stylecol} type="text" className="drum-pad bgc-blue" onKeyDown={(event) => handleMusicPlay(event)}> {keyTrigger}
          <audio controls className="clip" src={audio} />
        </div>
        <div id="display">
          {displaykey}
        </div>
      </div>

    </div>

  )
}

export default Sound;