import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot()
  });

  it('should keep track of what is in the search bar', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state('search')).toEqual('');
  });
})