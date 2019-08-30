import React from 'react';
import { storiesOf } from '@storybook/react';
import Navbar from './index'
import Nav from './Nav'
import NavItem from './NavItem'
import NavbarBrand from './NavbarBrand'
import NavLink from './NavLink'
import Form from './../../form/index'
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../Breadcrumb/BreadcrumbItem';
import Button from '../../form/controls/Button';
import { User, Save, Users } from 'react-feather';
import SearchBar from '../../form/controls/SearchBar';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('Navigation|Navbar', module)
  .add('Basic Navbar', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h2>Navbar</h2>
        <br/>
        <p>Responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin. Read the <a href="https://getbootstrap.com/docs/4.2/components/navbar/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
        <br/>
        <hr/>
        <h4>Basic Navbar</h4>
        <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"http://google.com"}>Google</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar>
          <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href={'http://yahoo.com'}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={'http://google.com'}>Google</NavLink>
            </NavItem>
          </Nav>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Brand Content', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar - Brand Content</h4>
        <br/>
        <p>The <code>NavbarBrand</code> can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
        </Navbar>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar>
            <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Nav Content', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar - Nav Content</h4>
        <br/>
        <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"http://google.com"}>Google</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar>
          <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href={'http://yahoo.com'}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={'http://google.com'}>Google</NavLink>
            </NavItem>
          </Nav>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Form Content', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar - Form Content</h4>
        <br/>
        <p>Place various form controls and components within a navbar.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
          <div style={{ width: '100%' }}>
            <Form>
              {(props) => (
                <SearchBar
                  navBar={true}
                  name={'search'}
                  width={500}
                  placeholder={'Enter keyword search all products in catalog'}
                />
              )}
            </Form>
          </div>
        </Navbar>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar>
          <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          <div style={{ width: '100%' }}>
            <Form>
              {(props) => (
                <SearchBar
                  navBar={true}
                  name={'search'}
                  width={500}
                  placeholder={'Enter keyword search all products in catalog'}
                />
              )}
            </Form>
          </div>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Loading Breadcrumb', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar - Loading Breadcrumb</h4>
        <br/>
        <p>Place loading bradcrumb inside navigation bar.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
          <Breadcrumb loading={true}>
            <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <Nav>
            <NavItem>
              <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"http://google.com"}>Google</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar>
          <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          <Breadcrumb loading={true}>
            <BreadcrumbItem><a href='#'>Story</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#'>Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <Nav>
            <NavItem>
              <NavLink href={'http://yahoo.com'}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={'http://google.com'}>Google</NavLink>
            </NavItem>
          </Nav>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Bredcrumb', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar - Breadcrumb</h4>
        <br/>
        <p>Place bradcrumb inside navigation bar.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <Nav>
            <NavItem>
              <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"http://google.com"}>Google</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar>
          <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          <Breadcrumb>
            <BreadcrumbItem><a href='#'>Story</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#'>Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <Nav>
            <NavItem>
              <NavLink href={'http://yahoo.com'}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={'http://google.com'}>Google</NavLink>
            </NavItem>
          </Nav>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Button Right', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar - Button Right</h4>
        <br/>
        <p>Place one or more buttons and set its position to right inside the navigation bar.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <Nav>
            <NavItem>
              <Button icon={<User size={18} />} color="primary">Add user</Button>
            </NavItem>
            <NavItem>
              <Button icon={<Save size={18} />} color="warning">Save</Button>
            </NavItem>
          </Nav>
        </Navbar>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar>
          <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          <Breadcrumb>
            <BreadcrumbItem><a href='#'>Story</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#'>Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <Nav>
            <NavItem>
              <Button icon={<User size={18} />} color='primary'>Add user</Button>
            </NavItem>
            <NavItem>
              <Button icon={<Save size={18} />} color='warning'>Save</Button>
            </NavItem>
          </Nav>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Search', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar - Search</h4>
        <br/>
        <p>Place search elements inside the navigation bar.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar>
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
          <div style={{ width: '100%' }}>
            <Form>
              {(props) => (
                <SearchBar
                  navBar={true}
                  name={'search'}
                  width={500}
                  placeholder={'Enter keyword search all products in catalog'}
                />
              )}
            </Form>
          </div>
          <Nav>
            <NavItem>
              <NavLink><Users size={24} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"http://yahoo.com"}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={"http://google.com"}>Google</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar>
          <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          <div style={{ width: '100%' }}>
            <Form>
              {(props) => (
                <SearchBar
                  navBar={true}
                  name={'search'}
                  width={500}
                  placeholder={'Enter keyword search all products in catalog'}
                />
              )}
            </Form>
          </div>
          <Nav>
            <NavItem>
              <NavLink><Users size={24} /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={'http://yahoo.com'}>Yahoo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={'http://google.com'}>Google</NavLink>
            </NavItem>
          </Nav>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  )).add('Size', () => (
    <React.Fragment>
      <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
        <h4>Navbar - Size</h4>
        <br/>
        <p>Add <code>size={`"lg"`}</code> property to apply the size relevant styling to navbar elements.</p>
        <br/>
        <h6><strong>Example</strong></h6>
        <hr/>
        <Navbar size="lg">
          <NavbarBrand href={"http://google.com"}>Atomic Interface</NavbarBrand>
          <Breadcrumb>
            <BreadcrumbItem><a href="#">Story</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <Nav>
            <NavItem>
              <Button icon={<User size={18} />} color="primary">Add user</Button>
            </NavItem>
            <NavItem>
              <Button icon={<Save size={18} />} color="warning">Save</Button>
            </NavItem>
          </Nav>
        </Navbar>
        <br/>
        <br/>
        <h6><strong>Code</strong></h6>
        <hr />
        <CodeMirror
          value="<Navbar size='lg'>
          <NavbarBrand href={'http://google.com'}>Atomic Interface</NavbarBrand>
          <Breadcrumb>
            <BreadcrumbItem><a href='#'>Story</a></BreadcrumbItem>
            <BreadcrumbItem><a href='#'>Navigation</a></BreadcrumbItem>
            <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <Nav>
            <NavItem>
              <Button icon={<User size={18} />} color='primary'>Add user</Button>
            </NavItem>
            <NavItem>
              <Button icon={<Save size={18} />} color='warning'>Save</Button>
            </NavItem>
          </Nav>
          </Navbar>"
          options={{
          mode: 'jsx',
          lineNumbers: true,
          smartIndent: true,
          readOnly: true            
          }}
          editorDidMount={editor => {            
          reindent(editor);
          }}
        />
      </Col>
    </React.Fragment>
  ));

