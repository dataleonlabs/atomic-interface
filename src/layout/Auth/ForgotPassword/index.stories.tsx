import React from 'react';
import { storiesOf } from '@storybook/react';
import ForgotPassword from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Layout|Forgot Password', module)
  .add('Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Layout</h2>
        <br/>
        <p>Use custom form layout styles that can be added to element like cards, modals, sidebars or any other elements. Additional utilities classes can be used to vary this layout.</p>
        <hr/>
        <br/>
        <h4>Layout - Forgot Password</h4>
        <br/>
        <p>The file input is the most generaly of the bunch and requires additional JavaScript if you’d like to hook them up with functional Picture and selected file name text.</p>
        <hr/>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <ForgotPassword
          provider={{
            type: "aws-cognito",
            credentials: {
              "region": "eu-central-1",
              "userPoolId": "eu-central-1_5jBnZEuMX",
              "userPoolWebClientId": "543up50u5glbg9qlpkuhop779t",
            },
          }}>
          <Header>
            <HeaderTitle>
              <span>Forgot Password</span>
            </HeaderTitle>
            <HeaderSubTitle>
              <span>Please enter your registered email ID.</span>
            </HeaderSubTitle>
          </Header>
          <Footer>
            <span>Copyright 2019</span>
          </Footer>
        </ForgotPassword>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr/>
        <CodeMirror
          value={`<ForgotPassword
  provider={{
    type: 'aws-cognito',
    credentials: {
      'region': 'eu-central-1',
      'userPoolId': 'eu-central-1_5jBnZEuMX',
      'userPoolWebClientId': '543up50u5glbg9qlpkuhop779t',
    },
  }}>
  <Header>
    <HeaderTitle>
      <span>Forgot Password</span>
    </HeaderTitle>
    <HeaderSubTitle>
      <span>Please enter your registered email ID.</span>
    </HeaderSubTitle>
  </Header>
  <Footer>
    <span>Copyright 2019</span>
  </Footer>
</ForgotPassword>`}
          options={{
          mode: 'jsx',
          lineNumbers: false,
          readOnly: true            
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Example Validation Translated - Italy', () => (
    <React.Fragment>
      <ForgotPassword
        validationMessageRequiredEmail="Per favore, inserisci l'e-mail"
        validationmessageValidEmail="Inserisci indirizzo email valido"
        validationMessageRequiredCode="Per favore inserisci il codice"
        validationMessageRequiredNewPassword="Inserisci una nuova password"
        validationMessageValidNewPassword="Deve contenere almeno 6 caratteri, almeno una maiuscola, una minuscola, un numero e un carattere maiuscolo da '! @ # $% ^ & *'."
        validationMessageRequiredConfirmPassword="Si prega di inserire la password di conferma"
        validationMessageValidConfirmPassword="Le password non corrispondono"
        provider={{
          type: "aws-cognito",
          credentials: {
            "region": "eu-central-1",
            "userPoolId": "eu-central-1_5jBnZEuMX",
            "userPoolWebClientId": "543up50u5glbg9qlpkuhop779t",
          },
        }}>
        <Header>
          <HeaderTitle>
            <span>Forgot Password</span>
          </HeaderTitle>
          <HeaderSubTitle>
            <span>Please enter your registered email ID.</span>
          </HeaderSubTitle>
        </Header>
        <Footer>
          <span>Copyright 2019</span>
        </Footer>
      </ForgotPassword>
    </React.Fragment>
  )).add('Example Validation Translated - French', () => (
    <React.Fragment>
      <ForgotPassword
        validationMessageRequiredEmail="S'il vous plaît entrer email"
        validationmessageValidEmail="S'il vous plaît entrer une adresse email valide"
        validationMessageRequiredCode="S'il vous plaît entrer le code"
        validationMessageRequiredNewPassword="Veuillez entrer un nouveau mot de passe"
        validationMessageValidNewPassword="Doit contenir au minimum 6 caractères, au moins une majuscule, une minuscule, un chiffre et un caractère de casse spécial de '! @ # $% ^ & *'."
        validationMessageRequiredConfirmPassword="Veuillez entrer votre mot de passe"
        validationMessageValidConfirmPassword="Les mots de passe ne correspondent pas"
        provider={{
          type: "aws-cognito",
          credentials: {
            "region": "eu-central-1",
            "userPoolId": "eu-central-1_5jBnZEuMX",
            "userPoolWebClientId": "543up50u5glbg9qlpkuhop779t",
          },
        }}>
        <Header>
          <HeaderTitle>
            <span>Forgot Password</span>
          </HeaderTitle>
          <HeaderSubTitle>
            <span>Please enter your registered email ID.</span>
          </HeaderSubTitle>
        </Header>
        <Footer>
          <span>Copyright 2019</span>
        </Footer>
      </ForgotPassword>
    </React.Fragment>
  ));