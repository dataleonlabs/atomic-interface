import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';

//Login Form Component
const Body = () => {    
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
}
export default Body;

