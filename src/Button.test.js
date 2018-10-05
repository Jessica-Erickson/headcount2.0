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
                      handleHeaderClick={() => {}} />, 
                    div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Button 
                              text='testText' 
                              key='testText' 
                              handleHeaderClick={() => {}} />);

    expect(wrapper).toMatchSnapshot()
  });
});
