import React from 'react';
import { storiesOf } from '@storybook/react';
import Well from './index';
import { Col } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
require('codemirror/mode/jsx/jsx');

storiesOf('UI Elements|Well', module)
    .add('Default Functionality', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30, marginBottom: 30 }}>
                <h4>Well</h4>
                <p>The <code>{`well`}</code> adds a rounded border around an element with a gray background color and some padding.</p>
                <br />
                <h6><strong>Example</strong></h6>
                <hr />
                <Well heading="Well">Demo Of Well</Well>
                <br />
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<Well>Demo Of Well</Well>`}
                    options={{
                        mode: 'jsx',
                        lineNumbers: false,
                        readOnly: true
                    }}
                />
            </Col>
        </React.Fragment>
    ));