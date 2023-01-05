import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RealtimeBoxTwo from '../Realtime/RealtimeBoxTwo';

function transformData (data, codes) {
  const result = [];
  for (const item of data) {
      const value = JSON.parse(item.value);
      const desc = codes.find((one) => _.find(value.codes, one.code) !== null);
      result.push({...value, time: item.time, id: item.id, desc: desc && desc.summary ? desc.summary : 'UNKNOWN' });
  }
  return result;
}

function filterBasedOnSettings(data, strategies) {
  const filtered = data.filter((item) => {
      const codes = item.codes;
      if (!codes || (codes.length <= 0)) return false;
      return _.intersection(codes, strategies).length > 0;
  });
  return filtered;
}

RealtimeMessages.propTypes = {
  socket: PropTypes.object.isRequired,
  initMessages: PropTypes.array.isRequired,
  strategies: PropTypes.array.isRequired,
  codes: PropTypes.array.isRequired
};

function removeOldMessages(messages, setMessages) {
  const now = new Date();
  const filtered = messages.filter((item) => {
      const date = new Date(item.time);
      const diff = Math.abs(now - date) / 1000 / 60;    // minutes
      return diff < 20;
  });
  if (filtered.length !== messages.length) setMessages(filtered);
}

export default function RealtimeMessages({ socket, initMessages, strategies, codes }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => removeOldMessages(messages, setMessages), 30000);
    return () => clearInterval(interval);
  }, []);

  // FIX LATER
  // The data is saved before sentiment and code is inserted.  Need to fix that.
  //
  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    const transformed = transformData(initMessages, codes);
    const filtered = filterBasedOnSettings(transformed, strategies);
    if (!filtered || (filtered.length <= 0)) return;
    setMessages((prev) => [...prev, ...filtered]);
  }, [initMessages, codes]);

  useEffect(() => {
    const messageListener = (message) => {
      const transformed = transformData([message], codes);
      const filtered = filterBasedOnSettings(transformed, strategies);
      if (!filtered || (filtered.length <= 0)) return;
      setMessages((prev) => [...prev, ...filtered]);
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
  }, [socket, codes]);

  if (messages.length > 0)
    return (<RealtimeBoxTwo transformed={messages} />);
  return (null);
}
