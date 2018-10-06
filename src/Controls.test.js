import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import {shallow} from 'enzyme';

describe('Controls', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Controls 
                      options={[]} 
                      handleClick={() => {}} />, 
                    div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Controls 
                              options={[]} 
                              handleClick={() => {}} />);

    expect(wrapper).toMatchSnapshot()
  });
});
