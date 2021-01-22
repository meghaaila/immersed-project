import Container from "./Container";
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Container />', () => {
  let wrapper;
  const options = [
      {value: 'nov2020', label: '11/2020 - 12/2020'},
      {value: 'dec2020', label: '12/2020 - 01/2021'},
      {value: 'jan2021', label: '01/2021-01/2021'}]

  beforeEach(() => {
    wrapper = shallow(<Container />);
  });

  it('has the initial state count of zero', () => {
    expect(wrapper.state()).toEqual({ data: {}, ind: 0, options: options, createRolesToggle: false });
  })


});
