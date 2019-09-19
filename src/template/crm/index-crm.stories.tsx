import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col, Row } from 'reactstrap';
import Column from '../../display/Table/Column';
import Table from '../../display/Table/index';
import faker from 'faker'
import Avatar from '../../display/Avatar';
import Badge from '../../display/Badge';
import Well from '../../display/Well';
import Form from '../../form';
import Select from '../../form/controls/Select';
import Input from '../../form/controls/Input';
import Button from '../../form/controls/Button';
import DropDown from '../../display/Dropdown';
import DropDownItem from '../../display/Dropdown/DropdownItem';
import Alert from '../../display/Alert';
import TabItem from '../../display/Tabs/TabItem';
import Tabs from '../../display/Tabs';
import Textarea from '../../form/controls/Textarea';
import ListGroupItem from '../../display/ListGroup/ListGroupItem';
import ListGroup from '../../display/ListGroup';

const assets: any[] = [];
const notes: any[] = [];
const random: any[] = [];

for (let index = 1; index < 40; index++) {
  random.push(`https://picsum.photos/id/${index}/200/200`)
}

for (let index = 0; index < 30; index++) {
  assets.push({
    id: index + 1,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    phone: faker.phone.phoneNumber(),
    location: `${faker.address.zipCode()}, ${faker.address.country()}`,
    email: faker.internet.email(),
    tags: faker.random.arrayElement(['Important', 'Customer', 'Lead', 'Supplier']),
    profile: faker.random.arrayElement(random),
  });
}


for (let index = 0; index < 4; index++) {
  notes.push({
    id: index + 1,
    date: faker.date.past().toString(),
    note: `${faker.random.words(3)}
${faker.random.words(4)}
${faker.random.words(3)}
    `,
  });
}

storiesOf('Template|CRM', module)
  .add('Contacts', () => (
    <React.Fragment>
      <Col sm={11} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Contacts </h2>
        <hr />
        <Alert icon={true} color="primary">
          <>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          </>
        </Alert>
        <br />
        <Well>
          <Form>
            {(_) => (
              <Row style={{ marginTop: 7 }}>
                <Col sm={6}>
                  <Input name={'search'} placeholder={'Search'} inline={true} />
                </Col>
                <Col sm={3}>
                  <Select
                    isClearable
                    creatable
                    isMulti
                    inline={true}
                    name={'Tags'}
                    placeholder={'Tags'}
                    options={[
                      { value: 'chocolate', label: 'Chocolate' },
                      { value: 'strawberry', label: 'Strawberry' },
                      { value: 'vanilla', label: 'Vanilla' },
                    ]}
                  />
                </Col>
              </Row>
            )}
          </Form>
        </Well>
        <Table data={assets} selectable={true} sortable={true}>
          <Column field="profile" width={80} formatter={(cell: any, row: any) => {
            return (
              <Avatar size="sm" src={cell} />
            )
          }}>{' '}</Column>
          <Column width={150} field="name">First Name</Column>
          <Column width={250} field="email">Email address</Column>
          <Column field="phone">Phone number</Column>
          <Column field="location">Location</Column>
          <Column field="tags" formatter={(cell: any, row: any) => {
            return (
              <h6><Badge pill color="primary">{cell}</Badge></h6>
            )
          }}>Tags</Column>
        </Table>
      </Col>
    </React.Fragment>
  ))
  .add('Contact', () => (
    <React.Fragment>
      <Col sm={11} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Contact</h2>
        <hr />
        <Tabs activeTab={0} onChange={(i) => i}>
          <TabItem title="Fiche Client">
            <Form
              initialValues={{ name: 'Gérard TOKO' }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ values, errors, touched, isSubmitting, handleSubmit }) => (
                <>
                  <Col sm={8} style={{ marginTop: 15, paddingLeft: 0 }}>
                    <Input name={'firstname'} label={'First Name'} placeholder={'First Name'} help={'Example: Gérard'} />
                    <Input name={'lastname'} label={'Last Name'} placeholder={'Last Name'} help={'Example: TOKO'} />
                    <Input
                      name={'email'} label={'Email'} placeholder={'Enter your Young App email'}
                      rightAddon={'@youngapp.co'}
                    />
                    <Input
                      name={'website'} label={'Website'} placeholder={'Your website'}
                      leftAddon={'https://'}
                    />
                    <Select
                      isClearable
                      creatable
                      isMulti
                      inline={true}
                      name={'Tags'}
                      label={'Tags'}
                      placeholder={'Tags'}
                      options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                      ]}
                    />
                    <Button color="primary" disabled={isSubmitting} loading={isSubmitting}>Submit Contact</Button>
                  </Col>
                </>
              )}
            </Form>
          </TabItem>
          <TabItem title="Notes">
            <Col sm={11} style={{ marginTop: 15, paddingLeft: 0 }}>
              <Well>
                <Form>
                  {(_) => (
                    <>
                      <Textarea placeholder={'Add new note'} name='note' rows={2} />
                      <Button color="primary" size="sm">Add new note</Button>
                    </>
                  )}
                </Form>
              </Well>
              <br/>
              <Table data={notes} hideHeader={true}>
                <Column width={50} field="date">Date</Column>
                <Column field="note">Note</Column>
              </Table>
            </Col>
          </TabItem>
          <TabItem title="Comments">
            <Col sm={11} style={{ marginTop: 15, paddingLeft: 0 }}>
              <Well>
                <Form>
                  {(_) => (
                    <>
                      <Textarea placeholder={'Add new comment'} name='note' rows={2} />
                      <Button color="primary" size="sm">Submit</Button>
                    </>
                  )}
                </Form>
              </Well>
            </Col>
          </TabItem>
        </Tabs>
      </Col>
    </React.Fragment>
  ))