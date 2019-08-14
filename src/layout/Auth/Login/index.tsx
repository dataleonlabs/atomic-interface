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
                        <Input name='username' type='text' placeholder='Enter Username'>
                        </Input>
                        <Input name='password' type='password' placeholder='Enter Password'>
                        </Input>
                        <Button name='btnSubmti' type='submit'>Login</Button>
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
                        <Input name='email' type='text' placeholder='Enter Email'>
                        </Input>
                        <Input name='password' type='password' placeholder='Enter New Password'>
                        </Input>
                        <Button name='btnSubmti' type='submit'>Save Password</Button>
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
                        <Input name='username' type='text' placeholder='Enter Username'>
                        </Input>
                        <Input name='code' type='text' placeholder='Enter Code'>
                        </Input>
                        <Button name='btnSubmti' type='submit'>Submit</Button>
                    </Form>
                </CardBody>
                <CardFooter>{footerProps.children}</CardFooter>
            </Card>
        )
    }
}
export default Login;