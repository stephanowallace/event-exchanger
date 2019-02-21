import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const EventSender = ({ className, eventName }) => {
  const buttonEl = useRef(null);
  const event = new Event(eventName, { bubbles: true, composed: true });

  const handleClick = () => window.dispatchEvent(event);

  return (
    <Button ref={buttonEl} className={className} onClick={handleClick}>
      {eventName}
    </Button>
  );
};

EventSender.propTypes = {
  eventName: PropTypes.string.isRequired
};

export default EventSender;
