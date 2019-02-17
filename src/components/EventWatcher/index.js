import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const EventWatcher = ({ className, eventName }) => {
  const [numberOfListens, setNumberOfListens] = useState(0);

  function eventHandler(e) {
    setNumberOfListens(numberOfListens + 1);
  }

  useEffect(() => {
    document.addEventListener(eventName, e => eventHandler(e));
    return document.removeEventListener(eventName, e => eventHandler(e));
  });

  return (
    <div className={`${style.container} ${className}`}>
      <p data-test="eventWatcherName" className={style.name}>{eventName}</p>
      <p data-test="eventWatcherListens" className={style.counter}>Listened {numberOfListens} times</p>
    </div>
  );
};

EventWatcher.propTypes = {
  eventName: PropTypes.string.isRequired
};

export default EventWatcher;
