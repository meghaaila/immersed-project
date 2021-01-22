import CurrentInformation from "./CurrentInformation";
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('useState mock', () => {

   const wrapper = shallow(<CurrentInformation />);
  expect(wrapper.exists()).toBe(true);
})
