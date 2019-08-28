import React from 'react';
import { storiesOf } from '@storybook/react';
import Introduction from './index';
import { CardDeck, Col,Row, CardLink,
  Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';

import {Layers, Database, Edit3, Package, Layout, Navigation, PlayCircle, ArrowRight} from 'react-feather'
import Breadcrumb from '../../navigation/Breadcrumb'
import BreadcrumbItem from '../../navigation/Breadcrumb/BreadcrumbItem';
import Navbar from '../../navigation/Navbar/index';
import Nav from '../../navigation/Navbar/Nav';
import NavItem from '../../navigation/Navbar/NavItem';
import NavbarBrand from '../../navigation/Navbar/NavbarBrand';
import NavLink from '../../navigation/Navbar/NavLink';

storiesOf('Introduction|Inroduction', module)
  .add('Basic', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <Breadcrumb>
            <BreadcrumbItem>Introduction</BreadcrumbItem>
            <BreadcrumbItem><a href="#">Basic</a></BreadcrumbItem>
        </Breadcrumb>
        <br/>
        <h1>Introduction</h1>
        <br/>
        <br/>
        <p style={{fontSize: 20}}>Get started with over a dozen reusable components built on top of Bootstrap with styles enhancement and additional components and options.</p>
        <br/>
        <br/>
        <CardDeck>
          <Card>
            <CardBody>
              <Layers size={50} color="#A6ACAF" />
              <br/>
              <br/>
              <CardTitle><h6><strong>UI Elements</strong></h6></CardTitle>
              <br/>
              <CardText>UI Elements are those elements that can be found in any page with a single function and that can exist alone.</CardText>
              <CardLink href="#">View Elements <ArrowRight size={14} /></CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Edit3 size={50} color="#A6ACAF"/>
              <br/>
              <br/>
              <CardTitle><h6><strong>Forms</strong></h6></CardTitle>
              <br/>
              <CardText>Examples and usage guidelines for form control styles, layout options, and custom components...</CardText>
              <CardLink href="#">View Forms <ArrowRight size={14} /></CardLink>
            </CardBody>
          </Card>
        </CardDeck>
        <br/>
        <br/>
        <CardDeck>
          <Card>
            <CardBody>
              <Layout size={50} color="#A6ACAF"/>
              <br/>
              <br/>
              <CardTitle><h6><strong>Layouts</strong></h6></CardTitle>
              <br/>
              <CardText>Use Bootstrap's powerful mobile-first flexbox grid to build layouts of all shapes and sizes.</CardText>
              <CardLink href="#">View Layouts <ArrowRight size={14} /></CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Navigation size={50} color="#A6ACAF"/>
              <br/>
              <br/>
              <CardTitle><h6><strong>Navigation</strong></h6></CardTitle>
              <br/>
              <CardText>Responsive navigation header, the navbar. Includes support for branding, navigation, and more.</CardText>
              <CardLink href="#">View Navigation <ArrowRight size={14} /></CardLink>
            </CardBody>
          </Card>
        </CardDeck>
        <br/>
        <br/>
        <CardDeck>
          <Card>
            <CardBody>
              <PlayCircle size={50} color="#A6ACAF"/>
              <br/>
              <br/>
              <CardTitle><h6><strong>Get Started</strong></h6></CardTitle>
              <br/>
              <CardText>Get started with over a dozen reusable components built on top of Bootstrap with styles enhancement.</CardText>
              <CardLink href="">View Introduction <ArrowRight size={14} /></CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Package size={50} color="#A6ACAF"/>
              <br/>
              <br/>
              <CardTitle><h6><strong>Others</strong></h6></CardTitle>
              <br/>
              <CardText>For faster mobile-friendly and responsive development, template includes dozens of utility...</CardText>
              <CardLink href="#">View Utilities <ArrowRight size={14} /></CardLink>
            </CardBody>
          </Card>
        </CardDeck>
        <br/>
        <hr/>
        <Navbar>
          <footer>© 2019 STORYBOOK V1.0.0.</footer>
          <Nav>
            <NavItem>
              <NavLink href="#">Licence</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Change Log</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Get Help</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <br/>
      </Col>
    </React.Fragment>
  ))