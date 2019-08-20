import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';
import { ConfirmSignInBodyProps as Props } from '../props'

const Body = (bodyProps: Props) => {
    const validate = function validateLoginForm() {
        alert('This is Test Alert');
    };

    return (
        <CardBody>
            <Form>
                {(_) => (
                    <>
                        <Input name='code' type='text' label={bodyProps.codeLabel} required={true} placeholder={bodyProps.codePlaceholder}>
                        </Input>
                        <Button onClick={validate} color={bodyProps.color} block={bodyProps.block}>{bodyProps.buttonLable}</Button>
                    </>
                )}
            </Form>
        </CardBody>
    )
}

Body.defaultProps = {
    block: true,
    codeLabel: 'Verification Code',
    codePlaceholder: 'Enter Your Code',
    color: "primary",
    buttonLable: 'Click To Verify'
}
export default Body;

