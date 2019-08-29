import * as React from 'react'
import * as enzyme from 'enzyme'
import Step from './index';
import StepItem from './StepItem';
import StepLink from './StepLink';
import StepTitle from './StepTitle';
import StepIcon from './StepIcon';
import StepDesc from './StepDesc';
import {
  StyledStep,
  StyledStepItem,
  StyledStepLink,
  StyledStepTitle,
  StyledStepDesc,
  StyledStepIcon
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
    expect(wrapper.find(StyledStepItem)).toHaveLength(3);
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
            <div>
              <StepTitle>Personal Information</StepTitle>
              <StepDesc>Enter your personal details.</StepDesc>
            </div>
          </StepLink>
        </StepItem>
        <StepItem state="active">
          <StepLink>
            <StepIcon><User size={18} /></StepIcon>
            <div>
              <StepTitle>Account Information</StepTitle>
              <StepDesc>Enter your account details.</StepDesc>
            </div>
          </StepLink>
        </StepItem>
        <StepItem>
          <StepLink>
            <StepIcon><DollarSign size={18} /></StepIcon>
            <div>
              <StepTitle>Payment Information</StepTitle>
              <StepDesc>Enter your credit card details.</StepDesc>
            </div>
          </StepLink>
        </StepItem>
      </Step>
    )
    expect(wrapper.find(StyledStep)).toHaveLength(1);
    expect(wrapper.find(StyledStepItem)).toHaveLength(3);
    expect(wrapper.find(StyledStepLink)).toHaveLength(3);
    expect(wrapper.find(StyledStepTitle)).toHaveLength(3);
    expect(wrapper.find(StyledStepIcon)).toHaveLength(3);
    expect(wrapper.find(StyledStepDesc)).toHaveLength(3);
  })
})