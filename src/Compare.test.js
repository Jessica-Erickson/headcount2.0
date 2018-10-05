import React from 'react';
import ReactDOM from 'react-dom';
import Compare from './Compare';
import {shallow} from 'enzyme';

describe('Compare', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Compare />, div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Compare />);

    expect(wrapper).toMatchSnapshot()
  });
});
