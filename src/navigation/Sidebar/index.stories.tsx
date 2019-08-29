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
import { Col } from 'reactstrap';

storiesOf('Navigation|Sidebar', module)
  .add('Basic Example', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Sidebar</h2>
        <br/>
        <p>Responsive sidebar with different elements and icons along with property options.</p>
        <br/>
        <hr/>
        <h4>Basic Example</h4>
        <p>Add any of the below mentioned navbar elements to make sidebar attractive.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  ))
  .add('Grouped', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Sidebar - Grouped</h4>
        <br/>
        <p>The <code>NavHeader</code> added to distinguish the groups inside sidebar.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  )).add('Badged', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Sidebar - Badged</h4>
        <br/>
        <p>Add Badge element to the sidebar and set the position of the same.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
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
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <pre>
          {`
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
          `}
        </pre>
      </Col>
    </React.Fragment>
  ));