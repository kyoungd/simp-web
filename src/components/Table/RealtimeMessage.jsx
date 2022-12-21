import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableBasic from './TableBasic';

RealtimeMessages.propTypes = {
  socket: PropTypes.object.isRequired,
  initMessages: PropTypes.array.isRequired
};

export default function RealtimeMessages({ socket, initMessages }) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const message of initMessages)
      setMessages((prev) => ({
        ...prev,
        [message.id]: message
      }));
  }, [initMessages]);

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        console.log(message);
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    // const deleteMessageListener = (messageID) => {
    //     setMessages((prevMessages) => {
    //         const newMessages = { ...prevMessages };
    //         delete newMessages[messageID];
    //         return newMessages;
    //     });
    // };

    socket.on('message', messageListener);
    // socket.on('deleteMessage', deleteMessageListener);
    // socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      // socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  const columns = [
    { key: 'symbol', name: 'Symbol' },
    { key: 'price', name: 'Price' },
    { key: 'pattern', name: 'Pattern' },
    { key: 'timeframe', name: 'Timeframe' },
    { key: 'time', name: 'Time' }
  ];
  const rows = [...Object.values(messages)]
    .sort((a, b) => b.sortid - a.sortid)
    .map((row) => {
        try {
        const message = JSON.parse(row.value);
        return { 
            id : message.id,
            symbol: message.symbol,
            price: message.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            }),
            pattern: message.pattern,
            timeframe: message.timeframe,
            time: row.time
        };
        } catch (e) {
        console.log(e);
        return null;
        }
    });
  <TableBasic columns={columns} rows={rows} />;
}
