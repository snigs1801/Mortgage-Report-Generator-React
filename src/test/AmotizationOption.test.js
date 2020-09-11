import React from 'react';import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AmotizationOption from "../components/AmotizationOption"; 


Enzyme.configure({ adapter: new Adapter() });

describe('AmotizationOption component Test Cases', () => {
  const container = shallow(<AmotizationOption />);
  
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a input radio', () => { 
    expect(container.find('input[type="radio"]').length).toEqual(1);
  });
});