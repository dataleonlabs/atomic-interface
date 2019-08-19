import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { AuthBodyProps as BodyProps } from '../props';
import { CardBody } from 'reactstrap';

//Login Form Component
const AuthBody = (bodyProps: BodyProps) => {
    if ((bodyProps.component == 'login')) {
        return (
            <CardBody>
                <Form>
                    <Input name='email' type='text' placeholder='Enter Email'>
                    </Input>
                    <Input name='password' type='password' placeholder='Enter Password'>
                    </Input>
                    <Button>Submit</Button>
                </Form>
            </CardBody>
        )
    } else if ((bodyProps.component == 'newPassword')) {
        return (
            <CardBody>
                <Form>
                    <Input name='newpassword' type='password' placeholder='Enter New Password'>
                    </Input>
                    <Input name='confirmpassword' type='password' placeholder='Enter Confirm Password'>
                    </Input>
                    <Button>Submit</Button>
                </Form>
            </CardBody>
        )
    } else if ((bodyProps.component == 'confirmSignIn')) {
        return (
            <CardBody>
                <Form>
                    <Input name='code' type='text' placeholder='Enter Code'>
                    </Input>
                    <Button>Submit</Button>
                </Form>
            </CardBody>
        )
    }
}
export default AuthBody;

