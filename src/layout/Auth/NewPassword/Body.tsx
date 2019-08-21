import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';
import {NewPasswordBodyProps as Props} from '../../props'

const Body = (bodyProps: Props) => {
    return (
        <CardBody>
            <Form>
                {(_) => (
                    <>
                        <Input name='newpassword' type='password' required={true} label={bodyProps.newPasswordLabel} placeholder={bodyProps.newPasswordPlaceholder}>
                        </Input>
                        <Input name='confirmpassword' type='password' required={true} label={bodyProps.confirmPasswordLabel} placeholder={bodyProps.confirmPasswordPlaceholder}>
                        </Input>
                        <Button color={bodyProps.color} block={bodyProps.block}>{bodyProps.buttonLable}</Button>
                    </>
                )}
            </Form>
        </CardBody>
    )
}

Body.defaultProps = {
    block: true,
    newPasswordLabel: 'New Password',
    newPasswordPlaceholder: 'Enter New Password',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Enter Confirm Password',
    color: "primary",
    buttonLable: 'Submit'
}

export default Body;