import * as React from 'react'
import Button from '../../../form/controls/Button'
import Input from '../../../form/controls/Input/index'
import Form from '../../../form/index'
import { AuthBodyProps as BodyProps, AuthHeaderProps as HeaderProps, AuthFooterProps as FooterProps } from '../props';
import { Card, CardFooter, CardHeader, CardBody } from 'reactstrap';

//Login Form Component
const Login = (bodyProps: BodyProps, headerProps: HeaderProps, footerProps: FooterProps) => {
    if ((bodyProps.component == 'login')) {
        return (
            <Card>
                <CardHeader>{headerProps.children}</CardHeader>
                <CardBody>
                    <Form>
                        <Input name='email' type='text' placeholder='Enter Email'>
                        </Input>
                        <Input name='password' type='password' placeholder='Enter Password'>
                        </Input>
                        <Button>Submit</Button>
                    </Form>
                </CardBody>
                <CardFooter>{footerProps.children}</CardFooter>
            </Card>
        )
    } else if ((bodyProps.component == 'newPassword')) {
        return (
            <Card>
                <CardHeader>{headerProps.children}</CardHeader>
                <CardBody>
                    <Form>
                        <Input name='newpassword' type='password' placeholder='Enter New Password'>
                        </Input>
                        <Input name='confirmpassword' type='password' placeholder='Enter Confirm Password'>
                        </Input>
                        <Button>Submit</Button>
                    </Form>
                </CardBody>
                <CardFooter>{footerProps.children}</CardFooter>
            </Card>
        )
    } else if ((bodyProps.component == 'confirmSignIn')) {
        return (
            <Card>
                <CardHeader>{headerProps.children}</CardHeader>
                <CardBody>
                    <Form>
                        <Input name='code' type='text' placeholder='Enter Code'>
                        </Input>
                        <Button>Submit</Button>
                    </Form>
                </CardBody>
                <CardFooter>{footerProps.children}</CardFooter>
            </Card>
        )
    }
}
export default Login;