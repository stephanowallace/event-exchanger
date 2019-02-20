import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import EventWatcher from '.';

describe('EventWatcher', () => {
  afterEach(cleanup);

  it('shows event name', () => {
    const { getByTestId } = render(<EventWatcher eventName="testName" />);
    expect(getByTestId('eventWatcher')).toContainElement(getByTestId('eventWatcherName'));
  });

  it('shows number of event listens', () => {
    const { getByTestId } = render(<EventWatcher eventName="testName" />);
    expect(getByTestId('eventWatcherListens')).toHaveTextContent('Listened 0 times');

    fireEvent(document, new Event('testName'));
    expect(getByTestId('eventWatcherListens')).toHaveTextContent('Listened 1 times');

    fireEvent(document, new Event('testName'));
    expect(getByTestId('eventWatcherListens')).toHaveTextContent('Listened 2 times');
  });
});