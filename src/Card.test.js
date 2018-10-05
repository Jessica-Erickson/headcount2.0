import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import {shallow} from 'enzyme';

describe('Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card data={{}} />, div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card data={{}} />);

    expect(wrapper).toMatchSnapshot()
  });
});
