import React from 'react';
import { shallow } from 'enzyme';
import WaitingListBtn from './WaitingListBtn';

describe('<WaitingListBtn />', () => {
  test('renders', () => {
    const wrapper = shallow(<WaitingListBtn />);
    expect(wrapper).toMatchSnapshot();
  });
});
