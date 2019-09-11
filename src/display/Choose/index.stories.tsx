import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');
import Choose from './index'

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
          <p>Box Component allow checkbox with display component.</p>
          <br/>
          <hr/>
          <h4>Basic Example</h4>
          <br/>
          <p>add </p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Choose className='customCheck' name='connect' title='Connectors' icon={false}>
            <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
          </Choose>
          <br/>
          <h6><strong>Code</strong></h6>
          <hr />        
          <CodeMirror
            value={`
<Choose className='customCheck' name='connect' title='Connectors' icon={true} >
    <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
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
          <p>Add icon={`{'icon'}`} property to display icon along with the component.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Choose className='customCheck' name='connect' title='Connectors' icon={true} >
            <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
          </Choose>
          <br/>
        <h6><strong>Code</strong></h6>
        <hr />        
          <CodeMirror
            value={`
<Choose className='customCheck' name='connect' title='Connectors' icon={true} >
    <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
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
          <p>Add icon={`{'icon'}`} property to display icon along with the component.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Choose className='customCheck' name='connect' title='Connectors' icon={true} >
            <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
          </Choose>
          <br/>
        <h6><strong>Code</strong></h6>
        <hr />        
          <CodeMirror
            value={`
<Choose className='customCheck' name='connect' title='Connectors' icon={true} >
  <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
</Choose>`}
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
          <p>Add icon={`{'icon'}`} property to display icon along with the component.</p>
          <br/>
          <h6><strong>Example</strong></h6>
          <hr/>
          <Choose className='customCheck' name='connect' title='Connectors' icon={true} >
            <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
          </Choose>
          <br/>
        <h6><strong>Code</strong></h6>
        <hr />        
          <CodeMirror
            value={`
<Choose className='customCheck' name='connect' title='Connectors' icon={true} >
  <span className='customCheckContent'>Add new connectors to apply treatments to your running data in current process</span>
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
