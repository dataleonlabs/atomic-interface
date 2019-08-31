import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from './index'
import Nav from './Nav'
import NavItem from './NavItem'
import { HelpCircle, Database, Grid, Folder, GitMerge, Eye, Watch, Linkedin, ExternalLink } from 'react-feather';
import Brand from './Brand';
import NavHeader from './NavHeader';
import NavIcon from './NavIcon';
import NavText from './NavText';
import Badge from '../../display/Badge';
import { Col, Row } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

storiesOf('Navigation|Sidebar', module)
  .add('Example', () => (
    <React.Fragment>
      <Row>
        <Col md={3}>
          <Sidebar>
            <Brand>Atomic Interface</Brand>
            <Nav>
              <NavItem>
                <NavIcon type="left"><Database size={23} /></NavIcon>
                <NavText>Dashboard</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Grid size={23} /></NavIcon>
                <NavText>Transaction</NavText>
              </NavItem>
              <NavItem active>
                <NavIcon type="left"><Folder size={23} /></NavIcon>
                <NavText>Products</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><GitMerge size={23} /></NavIcon>
                <NavText>Payments</NavText>
              </NavItem>
              <NavHeader>Catalogs</NavHeader>
              <NavItem>
                <NavIcon type="left"><Eye size={23} /></NavIcon>
                <NavText>Stocks</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Watch size={23} /></NavIcon>
                <NavText>Link</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Linkedin size={23} /></NavIcon>
                <NavText>UI-Kit</NavText>
              </NavItem>
            </Nav>
          </Sidebar>
        </Col>
        <Col md={7} style={{ marginTop: 30 }}>
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`<Sidebar>
  <Brand>Atomic Interface</Brand>
  <Nav>
    <NavItem>
      <NavIcon type="left"><Database size={23} /></NavIcon>
      <NavText>Dashboard</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Grid size={23} /></NavIcon>
      <NavText>Transaction</NavText>
    </NavItem>
    <NavItem active>
      <NavIcon type="left"><Folder size={23} /></NavIcon>
      <NavText>Products</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><GitMerge size={23} /></NavIcon>
      <NavText>Payments</NavText>
    </NavItem>
    <NavHeader>Catalogs</NavHeader>
    <NavItem>
      <NavIcon type="left"><Eye size={23} /></NavIcon>
      <NavText>Stocks</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Watch size={23} /></NavIcon>
      <NavText>Link</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Linkedin size={23} /></NavIcon>
      <NavText>UI-Kit</NavText>
    </NavItem>
  </Nav>
</Sidebar>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              smartIndent: true,
              readOnly: true
            }}
          />
        </Col>
      </Row>
    </React.Fragment>
  ))
  .add('With group', () => (
    <React.Fragment>
      <Row>
        <Col sm={3}>
          <Sidebar>
            <Brand>Atomic Interface</Brand>
            <Nav>
              <NavItem>
                <NavIcon type="left"><Database size={23} /></NavIcon>
                <NavText>Dashboard</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Grid size={23} /></NavIcon>
                <NavText>Transaction</NavText>
              </NavItem>
              <NavItem active>
                <NavIcon type="left"><Folder size={23} /></NavIcon>
                <NavText>Products</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><GitMerge size={23} /></NavIcon>
                <NavText>Payments</NavText>
              </NavItem>
              <NavHeader>Catalogs</NavHeader>
              <NavItem>
                <NavIcon type="left"><Eye size={23} /></NavIcon>
                <NavText>Stocks</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Watch size={23} /></NavIcon>
                <NavText>Link</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Linkedin size={23} /></NavIcon>
                <NavText>UI-Kit</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
                <NavText><a href="https://google.com">Help</a></NavText>
                <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
              </NavItem>
            </Nav>
          </Sidebar>
        </Col>
        <Col md={7} style={{ marginTop: 30 }}>
            <h6><strong>Code</strong></h6>
            <hr />
            <CodeMirror
              value={`<Sidebar>
  <Brand>Atomic Interface</Brand>
  <Nav>
    <NavItem>
      <NavIcon type="left"><Database size={23} /></NavIcon>
      <NavText>Dashboard</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Grid size={23} /></NavIcon>
      <NavText>Transaction</NavText>
    </NavItem>
    <NavItem active>
      <NavIcon type="left"><Folder size={23} /></NavIcon>
      <NavText>Products</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><GitMerge size={23} /></NavIcon>
      <NavText>Payments</NavText>
    </NavItem>
    <NavHeader>Catalogs</NavHeader>
    <NavItem>
      <NavIcon type="left"><Eye size={23} /></NavIcon>
      <NavText>Stocks</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Watch size={23} /></NavIcon>
      <NavText>Link</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Linkedin size={23} /></NavIcon>
      <NavText>UI-Kit</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
      <NavText><a href="https://google.com">Help</a></NavText>
      <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
    </NavItem>
  </Nav>
</Sidebar>`}
              options={{
                mode: 'jsx',
                lineNumbers: false,
                smartIndent: true,
                readOnly: true
              }}
            />
          </Col>
      </Row>      
    </React.Fragment>
  )).add('With badge', () => (
    <React.Fragment>
      <Row>
        <Col sm={3}>
          <Sidebar>
            <Brand>Atomic Interface</Brand>
            <Nav>
              <NavItem>
                <NavIcon type="left"><Database size={23} /></NavIcon>
                <NavText>Dashboard</NavText>
                <NavIcon type="right">
                  <Badge color="primary" pill={true}>9+</Badge>
                </NavIcon>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Grid size={23} /></NavIcon>
                <NavText>Transaction</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Folder size={23} /></NavIcon>
                <NavText>Products</NavText>
                <NavIcon type="right">
                  <Badge color="danger">59</Badge>
                </NavIcon>
              </NavItem>
              <NavItem active>
                <NavIcon type="left"><GitMerge size={23} /></NavIcon>
                <NavText>Payments</NavText>
              </NavItem>
              <NavHeader>Catalogs</NavHeader>
              <NavItem>
                <NavIcon type="left"><Eye size={23} /></NavIcon>
                <NavText>Stocks</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Watch size={23} /></NavIcon>
                <NavText>Link</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Linkedin size={23} /></NavIcon>
                <NavText>UI-Kit</NavText>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
                <NavText><a href="https://google.com">Help</a></NavText>
                <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
              </NavItem>
            </Nav>
          </Sidebar>
        </Col>
        <Col md={7} style={{ marginTop: 30 }}>
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`<Sidebar>
  <Brand>Atomic Interface</Brand>
  <Nav>
    <NavItem>
      <NavIcon type="left"><Database size={23} /></NavIcon>
      <NavText>Dashboard</NavText>
      <NavIcon type="right">
        <Badge color="primary" pill={true}>9+</Badge>
      </NavIcon>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Grid size={23} /></NavIcon>
      <NavText>Transaction</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Folder size={23} /></NavIcon>
      <NavText>Products</NavText>
      <NavIcon type="right">
        <Badge color="danger">59</Badge>
      </NavIcon>
    </NavItem>
    <NavItem active>
      <NavIcon type="left"><GitMerge size={23} /></NavIcon>
      <NavText>Payments</NavText>
    </NavItem>
    <NavHeader>Catalogs</NavHeader>
    <NavItem>
      <NavIcon type="left"><Eye size={23} /></NavIcon>
      <NavText>Stocks</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Watch size={23} /></NavIcon>
      <NavText>Link</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Linkedin size={23} /></NavIcon>
      <NavText>UI-Kit</NavText>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
      <NavText><a href="https://google.com">Help</a></NavText>
      <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
    </NavItem>
  </Nav>
</Sidebar>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              smartIndent: true,
              readOnly: true
            }}            
          />
        </Col>
      </Row>
    </React.Fragment>
  )).add('Loader', () => (
    <React.Fragment>
      <Row>
        <Col sm={3}>
          <Sidebar>
            <Brand>Atomic Interface</Brand>
            <Nav>
              <NavItem loading={true}>
                <NavIcon type="left"><Database size={23} /></NavIcon>
                <NavText>Dashboard</NavText>
                <NavIcon type="right">
                  <Badge color="primary" pill={true}>9+</Badge>
                </NavIcon>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Grid size={23} /></NavIcon>
                <NavText>Transaction</NavText>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Folder size={23} /></NavIcon>
                <NavText>Products</NavText>
                <NavIcon type="right">
                  <Badge color="danger">59</Badge>
                </NavIcon>
              </NavItem>
              <NavItem active loading={true}>
                <NavIcon type="left"><GitMerge size={23} /></NavIcon>
                <NavText>Payments</NavText>
              </NavItem>
              <NavHeader>Catalogs</NavHeader>
              <NavItem loading={true}>
                <NavIcon type="left"><Eye size={23} /></NavIcon>
                <NavText>Stocks</NavText>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Watch size={23} /></NavIcon>
                <NavText>Link</NavText>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Linkedin size={23} /></NavIcon>
                <NavText>UI-Kit</NavText>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
                <NavText><a href="https://google.com">Help</a></NavText>
                <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
              </NavItem>
            </Nav>
          </Sidebar>
        </Col>
        <Col md={7} style={{ marginTop: 30 }}>
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`<Sidebar>
  <Brand>Atomic Interface</Brand>
  <Nav>
    <NavItem loading={true}>
      <NavIcon type="left"><Database size={23} /></NavIcon>
      <NavText>Dashboard</NavText>
      <NavIcon type="right">
        <Badge color="primary" pill={true}>9+</Badge>
      </NavIcon>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Grid size={23} /></NavIcon>
      <NavText>Transaction</NavText>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Folder size={23} /></NavIcon>
      <NavText>Products</NavText>
      <NavIcon type="right">
        <Badge color="danger">59</Badge>
      </NavIcon>
    </NavItem>
    <NavItem active loading={true}>
      <NavIcon type="left"><GitMerge size={23} /></NavIcon>
      <NavText>Payments</NavText>
    </NavItem>
    <NavHeader>Catalogs</NavHeader>
    <NavItem loading={true}>
      <NavIcon type="left"><Eye size={23} /></NavIcon>
      <NavText>Stocks</NavText>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Watch size={23} /></NavIcon>
      <NavText>Link</NavText>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Linkedin size={23} /></NavIcon>
      <NavText>UI-Kit</NavText>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
      <NavText><a href="https://google.com">Help</a></NavText>
      <NavIcon type="right"><ExternalLink size={17} /></NavIcon>
    </NavItem>
  </Nav>
</Sidebar>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              smartIndent: true,
              readOnly: true
            }}
          />
        </Col>
      </Row>
    </React.Fragment>
  )).add('Loader icon only', () => (
    <React.Fragment>
      <Row>
        <Col sm={2}>
          <Sidebar icon={true}>
            <Nav>
              <NavItem loading={true}>
                <NavIcon type="left"><Database size={23} /></NavIcon>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Grid size={23} /></NavIcon>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Folder size={23} /></NavIcon>
              </NavItem>
              <NavItem active loading={true}>
                <NavIcon type="left"><GitMerge size={23} /></NavIcon>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Eye size={23} /></NavIcon>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Watch size={23} /></NavIcon>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><Linkedin size={23} /></NavIcon>
              </NavItem>
              <NavItem loading={true}>
                <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
              </NavItem>
            </Nav>
          </Sidebar>
        </Col>
        <Col md={7} style={{ marginTop: 30 }}>
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`<Sidebar icon={true}>
  <Nav>
    <NavItem loading={true}>
      <NavIcon type="left"><Database size={23} /></NavIcon>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Grid size={23} /></NavIcon>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Folder size={23} /></NavIcon>
    </NavItem>
    <NavItem active loading={true}>
      <NavIcon type="left"><GitMerge size={23} /></NavIcon>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Eye size={23} /></NavIcon>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Watch size={23} /></NavIcon>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><Linkedin size={23} /></NavIcon>
    </NavItem>
    <NavItem loading={true}>
      <NavIcon type="left"><HelpCircle size={23} /></NavIcon>
    </NavItem>
  </Nav>
</Sidebar>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              smartIndent: true,
              readOnly: true
            }}
          />
        </Col>
      </Row>
    </React.Fragment>
  ))
  .add('with only icon', () => (
    <React.Fragment>
      <Row>
        <Col sm={2}>
          <Sidebar icon={true}>
            <Nav>
              <NavItem>
                <NavIcon type="left"><Database size={23} /></NavIcon>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Grid size={23} /></NavIcon>
              </NavItem>
              <NavItem active>
                <NavIcon type="left"><Folder size={23} /></NavIcon>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><GitMerge size={23} /></NavIcon>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Eye size={23} /></NavIcon>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Watch size={23} /></NavIcon>
              </NavItem>
              <NavItem>
                <NavIcon type="left"><Linkedin size={23} /></NavIcon>
              </NavItem>
            </Nav>
          </Sidebar>
        </Col>
        <Col md={7} style={{ marginTop: 30 }}>
          <h6><strong>Code</strong></h6>
          <hr />
          <CodeMirror
            value={`<Sidebar icon={true}>
  <Nav>
    <NavItem>
      <NavIcon type="left"><Database size={23} /></NavIcon>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Grid size={23} /></NavIcon>
    </NavItem>
    <NavItem active>
      <NavIcon type="left"><Folder size={23} /></NavIcon>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><GitMerge size={23} /></NavIcon>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Eye size={23} /></NavIcon>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Watch size={23} /></NavIcon>
    </NavItem>
    <NavItem>
      <NavIcon type="left"><Linkedin size={23} /></NavIcon>
    </NavItem>
  </Nav>
</Sidebar>`}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              smartIndent: true,
              readOnly: true
            }}
          />
        </Col>
      </Row>
    </React.Fragment>    
  ));