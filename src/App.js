import './App.css';
import React,{useEffect, useState} from "react"

export default function App() {
  const [InputValue,setInputValue] = useState("")
  const [isActive,setisActive]= useState(false)
  const [word,setWord] = useState("")
  const [qrCOde,setQrCode] = useState("")

// eslint-disable-next-line no-template-curly-in-string
useEffect(()=>{setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${word}`) },[word])
let handleClick =()=>{
// eslint-disable-next-line eqeqeq
if(InputValue != ""){
  setisActive(true)
  setWord(InputValue)

}
}
  return(
    <div class="container" style={{height:isActive ? "450px" : ""}}>
      <h3 class="title"><i class="fa-solid fa-aqcode"></i>Generador de codigo Qr</h3>
      <div class="qr-code-box" style={{visibility:isActive ? "visible" : ""}}>
          <div class="qr-code">
            <img src={qrCOde} alt=""/>

          </div>
      </div>
      <input type="text" class="userInput" placeholder="Ingrese texto o url" 
      onChange={(e)=>setInputValue(e.target.value)} style={{top:isActive ? "88px" : ""}}/>
      <button class="generate-btn" onClick={handleClick}>Generar</button>



    </div>

  )
}