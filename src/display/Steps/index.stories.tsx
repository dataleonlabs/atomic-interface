import React from 'react';
import { storiesOf } from '@storybook/react';
import Step from './index';
import StepItem from './StepItem';
import StepLink from './StepLink';
import StepTitle from './StepTitle';
import StepIcon from './StepIcon';
import StepDesc from './StepDesc';
import StepContent from './StepContent';
import { Col } from 'reactstrap';
import { Book, User, DollarSign } from 'react-feather';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}


storiesOf('UI Elements|Step', module)
  .add('Icon', () => (
    <React.Fragment>
      <Col md={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Using Icon</h4>
        <br/>
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`
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
</Step>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Description', () => (
    <React.Fragment>
      <Col md={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>With Desription</h4>
        <br/>
        <p>A step indicator with some brief description to every steps.</p>
        <hr />
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
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`
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
</Step>`}
          options={{
            mode: 'jsx',
            lineNumbers: false,
            readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  ));

