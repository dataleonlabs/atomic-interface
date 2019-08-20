import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';
import { LoginBodyProps as Props } from '../../props'

const Body = (bodyProps: Props) => {
    return (
        <CardBody>
            <Form>
                {(_) => (
                    <>
                        <Input name='email' type='text' label={bodyProps.usernameLabel} required={true} placeholder={bodyProps.usernameLabel} />
                        <Input name='password' type='password' label={bodyProps.passwordLabel} required={true} placeholder={bodyProps.passwordPlaceholder} />
                        <Button color={bodyProps.color} block={bodyProps.block}>{bodyProps.buttonLable}</Button>
                    </>
                )}
            </Form>
        </CardBody>
    )
}

Body.defaultProps = {
    block: true,
    usernameLabel: 'Email',
    usernamePlaceholder: 'Enter Email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter Password',
    color: "primary",
    buttonLable: 'Sign In'
}
export default Body;

