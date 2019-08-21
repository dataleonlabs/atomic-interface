import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';
import { LoginBodyProps as Props, AuthButon as AuthButtonProps } from '../../props'

const Body = (bodyProps: Props, buttonProps: AuthButtonProps) => {

    buttonProps.defaultProps = {
        block: true, 
        color: 'primary',
        buttonLable: 'Sign In'
    }

    bodyProps.email.defaultProps = {
        label: 'Email',
        type: 'text',
        name: 'email',
        placeholder: 'Enter Email',
        required: true
    }

    bodyProps.password.defaultProps = {
        label: 'Password',
        type: 'password',
        name: 'password',
        placeholder: 'Enter Password',
        required: true
    }

    return (
        <CardBody>
            <Form>
                {(_) => (
                    <>
                        <Input {...bodyProps.email} />
                        <Input {...bodyProps.password} />
                        <Button {...buttonProps}>{buttonProps.buttonLable}</Button>
                    </>
                )}
            </Form>
        </CardBody>
    )
}

export default Body;

