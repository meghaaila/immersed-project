import Footer from "./Footer";
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('class exists', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toBe(true);

});
