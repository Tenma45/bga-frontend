import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Socket } from 'socket.io-client';
import { getSocket } from './socket.ts';
import { Message } from './interface/message.interface.ts'

function App() {
  const [socket] = useState<Socket>(getSocket());

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket connected','Your id is',socket.id);
    });
    socket.on('message', (data:Message) => {
      console.log(data.id,":",data.message);
    });
    return () => {
      socket.off('message');
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          console.log("You say Hello!")
          socket.emit("message",{message:"Hello!"})
          }}>
          Hello
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
