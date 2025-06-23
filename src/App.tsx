import './App.css'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [socket,setSocket] = useState()
  const inputRef = useRef()


  function sendMessage() {
    if(!socket) return;
    
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("wss://ping-pong-ws.onrender.com") 
    setSocket(ws);


    ws.onmessage = (ev) => {
      alert(ev.data)
    }
  },[])
  
  return (
    <>
      <input type="text" ref={inputRef} placeholder='send the message' />
      <button onClick={sendMessage}>click</button>
    </>
  )
}

export default App
