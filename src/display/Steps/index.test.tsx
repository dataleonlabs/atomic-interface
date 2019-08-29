import * as React from 'react'
import * as enzyme from 'enzyme'
import Step from './index';
import StepItem from './StepItem';
import StepLink from './StepLink';
import StepTitle from './StepTitle';
import StepIcon from './StepIcon';
import StepDesc from './StepDesc';
import StepContent from './StepContent';
import {
  StyledStep,
  StyledStepItem,
  StyledStepLink,
  StyledStepTitle,
  StyledStepDesc,
  StyledStepIcon,
  StyledStepContent
} from './style'
import { Book, User, DollarSign } from 'react-feather';

describe('<Step />', () => {
  it('U-TEST-1 - Test Rendering Using Icon', () => {
    const wrapper = enzyme.mount(
      <Step>
        <StepItem state="complete">
          <StepLink>
            <StepIcon><Book size={18} /></StepIcon>
            <StepTitle>Personal Information</StepTitle>
          </StepLink>
        </StepItem>
        <StepItem state="active">
          <StepLink>
            <StepIcon><User size={18} /></StepIcon>
            <StepTitle>Account Information</StepTitle>
          </StepLink>
        </StepItem>
        <StepItem>
          <StepLink>
            <StepIcon><DollarSign size={18} /></StepIcon>
            <StepTitle>Payment Information</StepTitle>
          </StepLink>
        </StepItem>
      </Step>
    )
    expect(wrapper.find(StyledStep)).toHaveLength(1);
    expect(wrapper.find(StyledStepItem)).toHaveLength(1);
    expect(wrapper.find(StyledStepLink)).toHaveLength(3);
    expect(wrapper.find(StyledStepTitle)).toHaveLength(3);
    expect(wrapper.find(StyledStepIcon)).toHaveLength(3);    
  })

  it('U-TEST-2 - Test Rendering With Description', () => {
    const wrapper = enzyme.mount(
      <Step>
        <StepItem state="complete">
          <StepLink>
            <StepIcon><Book size={18} /></StepIcon>
            <StepContent>
              <StepTitle>Personal Information</StepTitle>
              <StepDesc>Enter your personal details.</StepDesc>
            </StepContent>
          </StepLink>
        </StepItem>
        <StepItem state="active">
          <StepLink>
            <StepIcon><User size={18} /></StepIcon>
            <StepContent>
              <StepTitle>Account Information</StepTitle>
              <StepDesc>Enter your account details.</StepDesc>
            </StepContent>
          </StepLink>
        </StepItem>
        <StepItem>
          <StepLink>
            <StepIcon><DollarSign size={18} /></StepIcon>
            <StepContent>
              <StepTitle>Payment Information</StepTitle>
              <StepDesc>Enter your credit card details.</StepDesc>
            </StepContent>
          </StepLink>
        </StepItem>
      </Step>
    )
    expect(wrapper.find(StyledStep)).toHaveLength(1);
    expect(wrapper.find(StyledStepItem)).toHaveLength(1);
    expect(wrapper.find(StyledStepLink)).toHaveLength(3);
    expect(wrapper.find(StyledStepTitle)).toHaveLength(3);
    expect(wrapper.find(StyledStepIcon)).toHaveLength(3);
    expect(wrapper.find(StyledStepDesc)).toHaveLength(3);
    expect(wrapper.find(StyledStepContent)).toHaveLength(3);
  })
})