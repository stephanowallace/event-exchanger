import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import EventSender from '.';

describe('EventSender', () => {
  afterEach(cleanup);

  it('renders event name as button label', () => {
    const { getByTestId } = render(<EventSender eventName="testName" />);
    expect(getByTestId('button')).toHaveTextContent('testName');
  });

  it('dispatches event', () => {
    const eventListenerMock = jest.fn();
    const { getByTestId } = render(<EventSender eventName="testName" />);

    document.addEventListener('testName', () => eventListenerMock());
    fireEvent.click(getByTestId('button'));

    expect(eventListenerMock).toHaveBeenCalled();
    document.removeEventListener('testName', () => eventListenerMock());
  });
});
