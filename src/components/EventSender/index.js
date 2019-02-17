import React from 'react';
import Button from '../Button';

const EventSender = ({ className, eventName }) => {
  function handleClick() {
    const event = new Event(eventName);
    document.dispatchEvent(event);
  }

  return <Button className={className} onClick={handleClick}>{eventName}</Button>;
};

export default EventSender;
