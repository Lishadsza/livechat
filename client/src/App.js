/*
import './App.css';
import io from 'socket.io-client'
const socket=io.connect("http://localhost:3001");
function App() {
  return <div className="App">hiiii</div>

}



export default App;

*/
import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect("http://localhost:3001");

function App() {
  
  const [userID, setUserID] = useState('');

  useEffect(() => {
    
    socket.on('connect', () => {
      console.log(`Connected with ID: ${socket.id}`);
      setUserID(socket.id);  
    });

    
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h3>Message</h3>
      <input type="text" placeholder="abc..."/>
      <input type="text" placeholder="abc..."/>
    </div>
  );
}

export default App;
