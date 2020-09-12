import React from 'react';import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AmountInput from "../components/AmountInput"; 

Enzyme.configure({ adapter: new Adapter() });

describe('AmountInput component Test Cases', () => {
  const container = shallow(<AmountInput />);
  
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a input text field', () => { 
    expect(container.find('input[type="text"]').length).toEqual(1);
  });
});
