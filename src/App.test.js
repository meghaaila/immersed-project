import App from "./App";
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('class exists', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);

});
