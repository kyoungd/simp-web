import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';
import RealtimeMessage from './RealtimeMessage';

RealtimeTable.propTypes = {
  jwt: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  initdata: PropTypes.arrayOf(PropTypes.object).isRequired
};

function RealtimeTable({ jwt, username, room, initdata }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    try {
      const url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:1337';
      const newSocket = socketIOClient(url, {
        query: {
          token: jwt
        }
      });
      // const newSocket = io(`http://localhost:1337`);
      newSocket.emit('joinRoom', { username, room });
      setSocket(newSocket);
      return () => newSocket.close();
    } catch (err) {
      console.log(err);
      return () => null;
    }
  }, [jwt, username, room]);

  if (socket) return <RealtimeMessage socket={socket} initMessages={initdata} />;
  return <div>Not connected</div>;
}

export default RealtimeTable;
