import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';
import {NewPasswordBodyProps as Props, AuthButon as ButtonProps} from '../../props'

const Body = (bodyProps: Props, buttonProps: ButtonProps) => {

    buttonProps.defaultProps = {
        block: true, 
        color: 'primary',
        buttonLable: 'Submit'
    }

    bodyProps.newPassword.defaultProps = {
        label: 'Confirm Password',
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Enter Confirm Password',
        required: true
    }

    bodyProps.password.defaultProps = {
        label: 'New Password',
        type: 'password',
        name: 'newPassword',
        placeholder: 'Enter New Password',
        required: true
    }

    return (
        <CardBody>
            <Form>
                {(_) => (
                    <>
                        <Input {...bodyProps.password} />                        
                        <Input {...bodyProps.newPassword} />                        
                        <Button {...buttonProps}>{buttonProps.buttonLable}</Button>
                    </>
                )}
            </Form>
        </CardBody>
    )
}

export default Body;