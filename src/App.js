import React from 'react';
import EventSender from './components/EventSender';
import EventWatcher from './components/EventWatcher';
import style from './style.module.css';
import './App.css';

const App = () => (
  <div className="App">
    <div className={style.verticalGroup}>
      <EventSender className={style.item} eventName="testEvent1" />
      <EventSender className={style.item} eventName="testEvent2" />
      <EventSender className={style.item} eventName="testEvent3" />
    </div>
    <div className={style.verticalGroup}>
      <EventWatcher className={style.item} eventName="testEvent1" />
      <EventWatcher className={style.item} eventName="testEvent2" />
      <EventWatcher className={style.item} eventName="testEvent3" />
    </div>
  </div>
);

export default App;
