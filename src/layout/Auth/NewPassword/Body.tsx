import * as React from 'react';
import Button from '../../../form/controls/Button/index';
import Input from '../../../form/controls/Input/index';
import Form from '../../../form/index';
import { CardBody } from 'reactstrap';

//New Password Form Component
const Body = () => {
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
}
export default Body;