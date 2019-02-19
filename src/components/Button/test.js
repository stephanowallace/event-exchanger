import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Button from '.';

describe('Button', () => {
  afterEach(cleanup);

  it('renders child', () => {
    const { getByTestId } = render(<Button>test</Button>);
    expect(getByTestId('button')).toHaveTextContent('test');
  });

  it('calls click event on button click', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickMock}>test</Button>);
    fireEvent.click(getByTestId('button'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('adds custom class', () => {
    const { getByTestId } = render(<Button className="testClass">test</Button>);
    expect(getByTestId('button')).toHaveClass('testClass');
  });
});
