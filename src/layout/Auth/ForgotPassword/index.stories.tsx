import React from 'react';
import { storiesOf } from '@storybook/react';
import ForgotPassword from './index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderTitle from '../components/Header/Title';
import HeaderSubTitle from '../components/Header/SubTitle';

storiesOf('Layout|Forgot Password', module)
  .add('Example', () => (
    <React.Fragment>
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