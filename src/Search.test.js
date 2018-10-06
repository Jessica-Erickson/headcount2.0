import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import {shallow} from 'enzyme';

describe('Search', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search 
                      searchValue={''}
                      handleSearch={() => {}} />, 
                    div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Search 
                              searchValue={''}
                              handleSearch={() => {}} />);

    expect(wrapper).toMatchSnapshot()
  });
});
