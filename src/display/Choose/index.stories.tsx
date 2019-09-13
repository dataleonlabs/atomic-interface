import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');
import Choose from './index'
import { CloudRain, Info } from 'react-feather';
import Badge from '../Badge';

var reindent = function(cm) {
  var lines = cm.lineCount();
  for (var i = 0; i < lines; i++) {
    cm.indentLine(i);
  };
}

storiesOf('UI Elements|Choose', module)
  .add('Basic Example', () => (
    <React.Fragment>
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h2>Choose</h2>
          <br/>
          <p>Choose component is really helpful component.</p>
          <br/>
          <hr/>
          <h4>Basic Example</h4>
          <br/>
          <p>One can add customized component using the below mentioned sample code.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
        <Choose name='connect' title='Connectors' badge={<Badge color="primary">9+</Badge>} icon={<CloudRain size={23}/>} >
            <span>Add new connectors to apply treatments to your running data in current process</span>
          </Choose>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr />        
          <CodeMirror
            value={`
<Choose
  name='connect'
  title='Connectors'
  icon={<CloudRain size={23}/>}
  badge={<Badge color="primary">9+</Badge>}
>
  <span>Add new connectors to apply treatments to your running data in current process</span>
</Choose>
          `}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              readOnly: true            
            }}
          />
        </Col>
      </React.Fragment>
  ))
  .add('Icon', () => (
    <React.Fragment>
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Choose - Icon</h4>
          <br/>
          <p>Add <code>icon</code> property to display icon along with the component.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Choose name='connect' title='Connectors' icon={<Info size={23}/>} >
            <span>Add new connectors to apply treatments to your running data in current process</span>
          </Choose>
          <br/>
        <h6><strong>Code</strong></h6>
        <hr />        
          <CodeMirror
            value={`
<Choose
  name='connect'
  title='Connectors'
  icon={<Info size={23}/>}
>
  <span>Add new connectors to apply treatments to your running data in current process</span>
</Choose>
            `}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              readOnly: true            
            }}
          />        
        </Col>
      </React.Fragment>
  ))
  .add('Badge', () => (
    <React.Fragment>
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Choose - Badge</h4>
          <br/>
          <p>Add <code>badge</code> property to display icon along with the coose component.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
        <Choose name='connect' title='Connectors' badge={<Badge pill color="primary">9+</Badge>}>
            <span>Add new connectors to apply treatments to your running data in current process</span>
          </Choose>
          <br/>
        <h6><strong>Code</strong></h6>
        <hr />        
          <CodeMirror
            value={`
<Choose
  name='connect'
  title='Connectors'
  badge={<Badge color="primary">9+</Badge>}
>
  <span>Add new connectors to apply treatments to your running data in current process</span>
</Choose>
            `}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              readOnly: true            
            }}
          />        
        </Col>
      </React.Fragment>
  ))
  .add('Color', () => (
    <React.Fragment>
        <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
          <h4>Choose - Color</h4>
          <br/>
          <p>By defining the properties <code>active, backgroundColorOnActive</code> one can set the desired background color to component. Also by adding the <code>backgroundColorOnHover</code> property one can apply the desire color for component hover.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Choose name='connect' title='Connectors' active={true} backgroundColorOnActive='lightblue' backgroundColorOnHover='skyblue'>
            <span>Add new connectors to apply treatments to your running data in current process</span>
          </Choose>
          <br/>
        <h6><strong>Code</strong></h6>
        <hr />        
          <CodeMirror
            value={`
<Choose
  name='connect'
  title='Connectors' 
  active={true}
  backgroundColorOnActive='lightblue'
  backgroundColorOnHover='skyblue'
>
  <span>Add new connectors to apply treatments to your running data in current process</span>
</Choose>          
            `}
            options={{
              mode: 'jsx',
              lineNumbers: false,
              readOnly: true            
            }}
          />        
        </Col>
      </React.Fragment>
  ))
