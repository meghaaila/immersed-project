import Filters from "./Filters";
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('useState mock', () => {
   const options=[
     {value: 'nov2020', label: '11/2020 - 12/2020'},
     {value: 'dec2020', label: '12/2020 - 01/2021'},
     {value: 'jan2021', label: '01/2021-01/2021'}];

     const setState = jest.fn();
     const onClickCallBack = jest.fn();
    const useStateMock: any = (initState: any) => [initState, setState];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
   const wrapper = shallow(<Filters options={options} onClickCallBack={onClickCallBack}/>);
  wrapper.find('Dropdown').first().prop('onChange')();
  expect(onClickCallBack).toHaveBeenCalled();
  expect(setState).toHaveBeenCalledTimes(1)
})
