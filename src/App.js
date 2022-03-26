
import React from 'react'

export default function App() {

  const [playAudio, setPlayAudio] = React.useState(false)
  const [soundButton, setSoundButton] = React.useState("")
  const [on, setOn] = React.useState(true)
  const [onBank, setOnBank] = React.useState(false)
  const [typeOfSound, setTypeOfSound] = React.useState("")
  const [vol, setVol] = React.useState(50)
  const [showVol, setShowVol] = React.useState(false)
  
  React.useEffect(() => {
    const audio =
    [
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'), 
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'), 
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'),
      new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'),
    ]

    if(soundButton === "Q" && on === true && onBank === false) {
      audio[0].volume = vol/100
      audio[0].play()
      setTypeOfSound("Heater 1")
    } else if(soundButton === "W" && on === true && onBank === false) {
      audio[1].volume = vol/100
      audio[1].play()
      setTypeOfSound("Heater 2")
    } else if(soundButton === "E" && on === true && onBank === false) {
      audio[2].volume = vol/100
      audio[2].play()
      setTypeOfSound("Heater 3")
    } else if(soundButton === "A" && on === true && onBank === false) {
      audio[3].volume = vol/100
      audio[3].play()
      setTypeOfSound("Heater 4")
    } else if(soundButton === "S" && on === true && onBank === false) {
      audio[4].volume = vol/100
      audio[4].play()
      setTypeOfSound("Clap")
    } else if(soundButton === "D" && on === true && onBank === false) {
      audio[5].volume = vol/100
      audio[5].play()
      setTypeOfSound("Open HH")
    } else if(soundButton === "Z" && on === true && onBank === false) {
      audio[6].volume = vol/100
      audio[6].play()
      setTypeOfSound("Kick n' Hat")
    } else if(soundButton === "X" && on === true && onBank === false) {
      audio[7].volume = vol/100
      audio[7].play()
      setTypeOfSound("Kick")
    } else if(soundButton === "C" && on === true && onBank === false) {
      audio[8].volume = vol/100
      audio[8].play()
      setTypeOfSound("Closed HH")
    } else if(soundButton === "Q" && on === true && onBank === true) {
      audio[9].volume = vol/100
      audio[9].play()
      setTypeOfSound("Chord 1")
    } else if(soundButton === "W" && on === true && onBank === true) {
      audio[10].volume = vol/100
      audio[10].play()
      setTypeOfSound("Chord 2")
    } else if(soundButton === "E" && on === true && onBank === true) {
      audio[11].volume = vol/100
      audio[11].play()
      setTypeOfSound("Chord 3")
    } else if(soundButton === "A" && on === true && onBank === true) {
      audio[12].volume = vol/100
      audio[12].play()
      setTypeOfSound("Shaker")
    } else if(soundButton === "S" && on === true && onBank === true) {
      audio[13].volume = vol/100
      audio[13].play()
      setTypeOfSound("Open HH")
    } else if(soundButton === "D" && on === true && onBank === true) {
      audio[14].volume = vol/100
      audio[14].play()
      setTypeOfSound("Closed HH")
    } else if(soundButton === "Z" && on === true && onBank === true) {
      audio[15].volume = vol/100
      audio[15].play()
      setTypeOfSound("Punchy Kick")
    } else if(soundButton === "X" && on === true && onBank === true) {
      audio[16].volume = vol/100
      audio[16].play()
      setTypeOfSound("Side Stick")
    } else if(soundButton === "C" && on === true && onBank === true) {
      audio[17].volume = vol/100
      audio[17].play()
      setTypeOfSound("Snare")
    } 

  },[playAudio])

  React.useEffect(() => {
    window.addEventListener("keydown",handleUserKeyPress)
    return () => {
      window.removeEventListener("keydown",handleUserKeyPress)
    }
  },[])


  function handleUserKeyPress(e) {
    setSoundButton(e.code.slice(-1))
    setPlayAudio(prevPlayAudio => !prevPlayAudio)
  }

  function sound(e) {
    if(e.currentTarget.textContent !== null) {
      setSoundButton(e.currentTarget.textContent)
      setPlayAudio(prevPlayAudio => !prevPlayAudio)
    }
  }

  function onSwitch() {
    setOn(prevOn => !prevOn)
  }

  function onBankState() {
    setOnBank(prevOnBank => !prevOnBank)
  }

  function setVolume(e) {
    setShowVol(true)
    setVol(e.target.value)
  }

  function deleteVolText() {
    setShowVol(false);
  }

  return (
    <div id="app-container">
      <div id="drum-machine">

        <div id='buttons'>
          <div className='drumpad'>
            <div onClick={sound}>Q</div>
            <div onClick={sound}>W</div>
            <div onClick={sound}>E</div>
          </div>
          <div className='drumpad'>
            <div onClick={sound}>A</div>
            <div onClick={sound}>S</div>
            <div onClick={sound}>D</div>
          </div>
          <div className='drumpad'>
            <div onClick={sound}>Z</div>
            <div onClick={sound}>X</div>
            <div onClick={sound}>C</div>
          </div>
          
        </div>
        
        <div id='settings'>
          <div className='power'>
            <h2>Power</h2>
            <div className="power-base"></div>
            <div onClick = {onSwitch} style={on?{marginLeft:"25px"}:{marginLeft:"-25px"}} className='power-switch'></div>
          </div>
          <div className='display'>
            <div className='text-display'>{showVol?`Volume: ${vol}`:typeOfSound}</div>
          </div>
          <div className='volume'>
            <input className="volumeSwitch" onChange = {setVolume} onMouseUp = {deleteVolText} onTouchEnd = {deleteVolText} type="range" min="0" max="100" step="1" />
          </div>
          <div className='bank'>
            <h2>Bank</h2>
            <div className="bank-base"></div>
            <div  onClick = {onBankState} style={onBank?{marginLeft:"25px"}:{marginLeft:"-25px"}} className="bank-switch"></div>
          </div>
        </div>

      </div>
    </div>
      
  );
}

