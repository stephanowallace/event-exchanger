import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const EventSender = ({ className, eventName }) => {
  function handleClick() {
    const event = new Event(eventName);
    document.dispatchEvent(event);
  }

  return <Button className={className} onClick={handleClick}>{eventName}</Button>;
};

EventSender.propTypes = {
  eventName: PropTypes.string.isRequired
};

export default EventSender;
