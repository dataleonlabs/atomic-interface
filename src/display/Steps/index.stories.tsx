import React from 'react';
import { storiesOf } from '@storybook/react';
import Step from './index';
import StepItem from './StepItem';
import StepLink from './StepLink';
import StepTitle from './StepTitle';
import StepIcon from './StepIcon';
import StepDesc from './StepDesc';
import { Col } from 'reactstrap';
import { Book, User, DollarSign } from 'react-feather';

storiesOf('UI Elements|Step', module)
  .add('Example with Icon', () => (
    <React.Fragment>
      <Col md={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Using Icon</h4>
        <p>A step indicator that uses icon instead of a step number indicator.</p>
        <hr />
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
        <br /><br />
        <h4>Code</h4>
        <hr />
        <pre>{`
        <Step>
          <StepItem state="active">
            <StepLink>
              <StepIcon><Book size={18} /></StepIcon>
              <StepTitle>Personal Information</StepTitle>
            </StepLink>
          </StepItem>
          <StepItem>
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
        `}</pre>
      </Col>
    </React.Fragment>
  )).add('Example with Description', () => (
    <React.Fragment>
      <Col md={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>With Desription</h4>
        <p>A step indicator with some brief description to every steps.</p>
        <hr />
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
        <br /><br />
        <h4>Code</h4>
        <hr />
        <pre>{`
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
        `}</pre>
      </Col>
    </React.Fragment>
  ));

