import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('renders child', () => {
    const component = shallow(<Button>test</Button>);
    expect(component.find('[data-test="button"]').text()).toBe('test');
  });

  it('calls click event on button click', () => {
    const onClickMock = jest.fn();
    const component = shallow(<Button onClick={onClickMock}>test</Button>);
    component.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
