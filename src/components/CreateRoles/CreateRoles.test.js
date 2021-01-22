import CreateRoles from "./CreateRoles";
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Popup from 'reactjs-popup';

describe('<CreateRoles />', () => {
  let wrapper;
  const options = [{ value: 'admin', label: 'Admin' },
    { value: 'team1', label: 'Team 1' },
        { value: 'team2', label: 'Team 2' },
        { value: 'team3', label: 'Team 3' }]

  beforeEach(() => {
     const onClickCallBack = jest.fn();
    wrapper = shallow(<CreateRoles  onClickCallBack={onClickCallBack}/>);
  });

  it('has the initial state count of zero', () => {
    expect(wrapper.state()).toEqual({  options: options,checkFlag: false, businessName: "", businessSite: "", email: "", psw: "", });
  })

  it('change events', () => {
       const onClickCallBack = jest.fn();
    const wrap = mount(<CreateRoles  onClickCallBack={onClickCallBack}><Popup /></CreateRoles>);
    console.log(wrap.find(Popup));
  })

});
