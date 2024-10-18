
import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect("http://localhost:3001");

function App() {
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    
    socket.on('connect', () => {
      console.log(`Connected with ID: ${socket.id}`);
      setUserID(socket.id);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      console.log(`${username} joined room ${room}`);
    }
  };

  return (
    <div className="App">
      <h3>Message</h3>
      <input
        type="text"
        placeholder="Your name..."
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(event) => setRoom(event.target.value)}
      />
      <button onClick={joinRoom}>Join Chat</button>

      <h4>Connected User ID: {userID}</h4>
    </div>
  );
}

export default App;
