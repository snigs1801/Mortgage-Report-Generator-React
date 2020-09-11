
import React from 'react';import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
 
import MortgageForm from '../components/MortgageForm';

Enzyme.configure({ adapter: new Adapter() });

describe('MortgageForm component Test Cases', () => {
  const container = shallow(<MortgageForm />);
  
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have a submit button', () => { 
    expect(container.find('input[type="submit"]').length).toEqual(1);
  });
  
  it('should have proper props for submit button', () => { 
    expect(container.find('input[type="submit"]').props()).toEqual({
      className: 'calculate-btn',
      type: 'submit',
      value: "Calculate",
      disabled: true
  }); 
  
  });
});