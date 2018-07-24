import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';

import DigitalClicker from '../src/components/DigitalClicker';
import YouTubeDebugger from '../src/components/YouTubeDebugger';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

const deepClone = obj => JSON.parse(JSON.stringify(obj));

describe('<DigitalClicker />', () => {
  it('should have the correct initial state', () => {
    const wrapper = shallow(<DigitalClicker />);
    expect(wrapper.state().timesClicked).to.not.equal(undefined, 'The `timesClicked` property does not exist in the state');
    expect(wrapper.state().timesClicked).to.be.a('number').to.equal(0, 'The `timesClicked` property does have the right value');
  });

  it('should update the count when the button is clicked', () => {
    const wrapper = shallow(<DigitalClicker />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().timesClicked).to.equal(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().timesClicked).to.equal(2);
  });


});
