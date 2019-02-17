import React from 'react';
import { shallow } from 'enzyme';
import EventWatcher from '.';

describe('EventWatcher', () => {
  it('shows event name', () => {
    const component = shallow(<EventWatcher eventName="testName" />);
    expect(component.find('[data-test="eventWatcherName"]').text()).toBe('testName');
  });

  it('shows number of event listens', () => {
    const component = shallow(<EventWatcher eventName="testName" />);
    const listenEl = component.find('[data-test="eventWatcherListens"]');
    expect(listenEl.text()).toBe(`Listened 0 times`);

    // document.dispatchEvent(new Event('testName'));
    // expect(listenEl.text()).toBe(`Listened 0 times`);
  });
});