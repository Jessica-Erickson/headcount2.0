import React from 'react';
import ReactDOM from 'react-dom';
import Compare from './Compare';
import {shallow} from 'enzyme';

describe('Compare', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Compare 
                      toCompare={[]}
                      repo={{}}
                      handleCompareClick={() => {}} />, 
                    div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Compare 
                              toCompare={[]}
                              repo={{}}
                              handleCompareClick={() => {}} />);

    expect(wrapper).toMatchSnapshot()
  });
});
