import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';

//ConfirmSignIn Form Component
const Body = () => {
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
export default Body;

