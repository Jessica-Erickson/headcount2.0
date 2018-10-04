import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import DistrictRepository from './helper';

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

  it('should keep track of which cards to compare', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state('compare')).toEqual([]);
  });

  it('should keep a repo of the relevant data', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state('repo')).toBeInstanceOf(DistrictRepository);
  });

  it('should update search when handleSearch is called', () => {
    const wrapper = shallow(<App />);
    const testEvent = {target: {value: 'denver'}};
    const expected = 'denver';

    wrapper.instance().handleSearch(testEvent);

    expect(wrapper.state('search')).toEqual(expected);
  });

  it('should update compare when a card is clicked', () => {
    const wrapper = shallow(<App />);
    const name = 'AGATE 300';
    const expected = ['AGATE 300'];

    wrapper.instance().handleCardClick(name);

    expect(wrapper.state('compare')).toEqual(expected);
  });

  it('should add up to two cards in compare', () => {
    const wrapper = shallow(<App />);
    const name1 = 'AGATE 300';
    const name2 = 'MOFFAT 2';
    const name3 = 'LONE STAR 101';
    const expected = ['AGATE 300', 'MOFFAT 2'];

    wrapper.instance().handleCardClick(name1);
    wrapper.instance().handleCardClick(name2);
    wrapper.instance().handleCardClick(name3);

    expect(wrapper.state('compare')).toEqual(expected);
  });

  it('should remove compare cards when clicked', () => {
    const wrapper = shallow(<App />);
    const name1 = 'AGATE 300';
    const name2 = 'MOFFAT 2';
    const expected = ['MOFFAT 2'];

    wrapper.instance().handleCardClick(name1);
    wrapper.instance().handleCardClick(name2);

    wrapper.instance().handleCompareClick(name1);

    expect(wrapper.state('compare')).toEqual(expected);
  });

  it('should be able to add new cards for comparison', () => {
    const wrapper = shallow(<App />);
    const name1 = 'AGATE 300';
    const name2 = 'MOFFAT 2';
    const name3 = 'LONE STAR 101';
    const expected = ['AGATE 300', 'MOFFAT 2'];

    wrapper.instance().handleCardClick(name3);
    wrapper.instance().handleCardClick(name1);

    wrapper.instance().handleCompareClick(name3);

    wrapper.instance().handleCardClick(name2);

    expect(wrapper.state('compare')).toEqual(expected);
  });
});
