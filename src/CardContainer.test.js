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

  it('should keep track of what is in the search bar', () => {
    const wrapper = shallow(<CardContainer data={{}} />);

    expect(wrapper.state('search')).toEqual('');
  });

  it('should update search when handleSearch is called', () => {
    const wrapper = shallow(<CardContainer data={{}} />);
    const testEvent = {target: {value: 'denver'}};
    const expected = 'denver';

    wrapper.instance().handleSearch(testEvent);

    expect(wrapper.state('search')).toEqual(expected);
  });
});
