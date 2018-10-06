import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import {shallow} from 'enzyme';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button 
                      text='testText' 
                      key='testText' 
                      handleClick={() => {}} />, 
                    div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Button 
                              text='testText' 
                              key='testText' 
                              handleClick={() => {}} />);

    expect(wrapper).toMatchSnapshot()
  });
});
