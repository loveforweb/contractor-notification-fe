import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('<Hero />', () => {
  test('renders', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toMatchSnapshot();
  });
});
