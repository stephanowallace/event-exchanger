import React from 'react';
import { shallow } from 'enzyme';
import EventSender from '.';

describe('EventSender', () => {
  it('renders event name as button label', () => {
    const component = shallow(<EventSender eventName="testName" />);
    expect(component.find('Button').render().text()).toBe('testName');
  });

  // it('sends event', () => {
  //   const component = shallow(<EventSender eventName="testName" />);
  //   component.find('Button').simulate('click');
  // });
});
