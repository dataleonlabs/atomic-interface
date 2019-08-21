import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';
import { ConfirmSignInBodyProps as Props, AuthButon as ButtonProps } from '../../props'

const Body = (bodyProps: Props, buttonProps: ButtonProps) => {
    
    const validate = function validateLoginForm() {
        alert('This is Test Alert');
    };

    buttonProps.defaultProps = {
        block: true, 
        color: 'primary',
        buttonLable: 'Click To Verify'
    }

    bodyProps.code.defaultProps = {
        label: 'Verification Code',
        type: 'text',
        name: 'code',
        placeholder: 'Enter Your Code',
        required: true
    }
    

    return (
        <CardBody>
            <Form>
                {(_) => (
                    <>
                        <Input {...bodyProps.code} />                        
                        <Button onClick={validate} {...buttonProps}>{buttonProps.buttonLable}</Button>
                    </>
                )}
            </Form>
        </CardBody>
    )
}

export default Body;

