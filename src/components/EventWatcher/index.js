import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const EventWatcher = ({ className, eventName }) => {
  const [numberOfListens, setNumberOfListens] = useState(0);
  const [flashAnimateClassName, setFlashAnimateClassName] = useState('');
  const REMOVE_CLASSNAME_TIME = 200;

  function eventHandler() {
    setNumberOfListens(numberOfListens + 1);
  }

  useEffect(() => {
    window.addEventListener(eventName, e => eventHandler(e));
    return window.removeEventListener(eventName, e => eventHandler(e));
  });

  useEffect(() => {
    if (!numberOfListens) return;
    setFlashAnimateClassName(style.flashAnimation);
    setTimeout(() => setFlashAnimateClassName(''), REMOVE_CLASSNAME_TIME);
  }, [numberOfListens]);

  return (
    <div
      data-testid="eventWatcher"
      className={`${style.container} ${flashAnimateClassName} ${className}`}
    >
      <p data-testid="eventWatcherName" className={style.name}>
        {eventName}
      </p>
      <p data-testid="eventWatcherListens" className={style.counter}>
        Listened {numberOfListens} times
      </p>
    </div>
  );
};

EventWatcher.propTypes = {
  eventName: PropTypes.string.isRequired
};

export default EventWatcher;
