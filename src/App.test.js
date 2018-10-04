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

  it('should keep track of what data is used', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state('dataSet')).toEqual('kinderData');
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
    const expected = [{ location: 'AGATE 300',
      stats:
       { '2004': 1,
         '2005': 1,
         '2006': 0,
         '2007': 1,
         '2008': 1,
         '2009': 1,
         '2010': 1,
         '2011': 1,
         '2012': 1,
         '2013': 1,
         '2014': 1 } }];

    wrapper.instance().handleCardClick(name);

    expect(wrapper.state('compare')).toEqual(expected);
  });

  it('should add up to two cards in compare', () => {
    const wrapper = shallow(<App />);
    const name1 = 'AGATE 300';
    const name2 = 'MOFFAT 2';
    const name3 = 'LONE STAR 101';

    wrapper.instance().handleCardClick(name1);
    wrapper.instance().handleCardClick(name2);
    wrapper.instance().handleCardClick(name3);

    expect(wrapper.state('compare')).toHaveLength(2);
  });
});
