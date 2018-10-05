import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import {shallow} from 'enzyme';

describe('CardContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardContainer data={{}} />, div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer data={{}} />);

    expect(wrapper).toMatchSnapshot()
  });
});
