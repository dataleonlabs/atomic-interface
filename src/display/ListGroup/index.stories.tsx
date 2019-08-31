import React from 'react';
import { storiesOf } from '@storybook/react';
import ListGroup from './index'
import ListGroupItem from './ListGroupItem'
import ListGroupItemHeading from './ListGroupItemHeading'
import ListGroupItemText from './ListGroupItemText'
import Badge from '../Badge/index';
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

storiesOf('UI Elements|ListGroup', module)
    .add('Basic Example', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
                <h2>List Group</h2>
                <br/>
                <hr/>
                <p>List groups are a flexible and powerful component for displaying a series of content.  Read the <a href="https://getbootstrap.com/docs/4.2/components/alerts/" target="_blank">Official Bootstrap Documentation</a> for a full list of instructions and other options.</p>
                <br/>
                <h4>Basic Example</h4>
                <br/>
                <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>
                <hr/>
                <h6><strong>Example</strong></h6>
                <hr/>
                <ListGroup>
                    <ListGroupItem>ListGroupItem 1</ListGroupItem>
                    <ListGroupItem>ListGroupItem 2</ListGroupItem>
                    <ListGroupItem>ListGroupItem 3</ListGroupItem>
                    <ListGroupItem>ListGroupItem 4</ListGroupItem>
                    <ListGroupItem>ListGroupItem 5</ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<ListGroup>
    <ListGroupItem>ListGroupItem 1</ListGroupItem>
    <ListGroupItem>ListGroupItem 2</ListGroupItem>
    <ListGroupItem>ListGroupItem 3</ListGroupItem>
    <ListGroupItem>ListGroupItem 4</ListGroupItem>
    <ListGroupItem>ListGroupItem 5</ListGroupItem>
</ListGroup>`}
                    options={{
                    mode: 'jsx',
                    lineNumbers: false,
                    readOnly: true            
                    }}
                />
            </Col>
        </React.Fragment>
    )).add('Badge', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group - Badge</h4>
                <br/>
                <p>Add Badge element to a ListGroupItem to display the additional badge.</p>
                <hr/>
                <h6><strong>Example</strong></h6>
                <hr/>
                <ListGroup>
                    <ListGroupItem>ListGroupItem 1 <Badge pill={true}>5</Badge></ListGroupItem>
                    <ListGroupItem>ListGroupItem 2 <Badge pill={true}>20</Badge></ListGroupItem>
                    <ListGroupItem>ListGroupItem 3 <Badge pill={true}>3+</Badge></ListGroupItem>
                    <ListGroupItem>ListGroupItem 4 <Badge pill={true}>40+</Badge></ListGroupItem>
                    <ListGroupItem>ListGroupItem 5 <Badge pill={true}>5</Badge></ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<ListGroup>
    <ListGroupItem>ListGroupItem 1 <Badge pill={true}>5</Badge></ListGroupItem>
    <ListGroupItem>ListGroupItem 2 <Badge pill={true}>20</Badge></ListGroupItem>
    <ListGroupItem>ListGroupItem 3 <Badge pill={true}>3+</Badge></ListGroupItem>
    <ListGroupItem>ListGroupItem 4 <Badge pill={true}>40+</Badge></ListGroupItem>
    <ListGroupItem>ListGroupItem 5 <Badge pill={true}>5</Badge></ListGroupItem>
</ListGroup>`}
                    options={{
                    mode: 'jsx',
                    lineNumbers: false,
                    readOnly: true            
                    }}
                />
            </Col>
        </React.Fragment>
    )).add('Disabled Item', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group - Disabled Item</h4>
                <br/>
                <p>Add disabled class to a ListGroupItem to indicate the current active selection.</p>
                <hr/>
                <h6><strong>Example</strong></h6>
                <hr/>
                <ListGroup>
                    <ListGroupItem disabled tag="a" href="#">ListGroupItem 1</ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 4 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 5 </ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<ListGroup>
    <ListGroupItem disabled tag='a' href='#'>ListGroupItem 1</ListGroupItem>
    <ListGroupItem tag='a' href='#'> ListGroupItem 2 </ListGroupItem>
    <ListGroupItem tag='a' href='#'> ListGroupItem 3 </ListGroupItem>
    <ListGroupItem tag='a' href='#'> ListGroupItem 4 </ListGroupItem>
    <ListGroupItem tag='a' href='#'> ListGroupItem 5 </ListGroupItem>
</ListGroup>`}
                    options={{
                    mode: 'jsx',
                    lineNumbers: false,
                    readOnly: true            
                    }}
                />
            </Col>
        </React.Fragment>
    )).add('Anchors', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group - Anchors</h4>
                <br/>
                <p>Add <code>tag={`'a'`}</code> along with <code>href={`'#url'`}</code> property to a ListGroupItem.</p>
                <hr/>
                <h6><strong>Example</strong></h6>
                <hr/>
                <ListGroup>
                    <ListGroupItem active disabled tag="a" href="#" action>ListGroupItem 1</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem tag="a" href="#" action> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem tag="a" href="#" action> ListGroupItem 4 </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action> ListGroupItem 5 </ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<ListGroup>
    <ListGroupItem active disabled tag='a' href='#' action>ListGroupItem 1</ListGroupItem>
    <ListGroupItem tag='a' href='#' action> ListGroupItem 2 </ListGroupItem>
    <ListGroupItem tag='a' href='#' action> ListGroupItem 3 </ListGroupItem>
    <ListGroupItem tag='a' href='#' action> ListGroupItem 4 </ListGroupItem>
    <ListGroupItem disabled tag='a' href='#' action> ListGroupItem 5 </ListGroupItem>
</ListGroup>`}
                    options={{
                    mode: 'jsx',
                    lineNumbers: false,
                    readOnly: true            
                    }}
                />
            </Col>
        </React.Fragment>
    )).add('Buttons', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group - Buttons</h4>
                <br/>
                <p>Add <code>tag={`'button'`}</code> property to a ListGroupItem.</p>
                <hr/>
                <h6><strong>Example</strong></h6>
                <hr/>
                <ListGroup>
                    <ListGroupItem active tag="button" action>ListGroupItem 1</ListGroupItem>
                    <ListGroupItem tag="button" action> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem tag="button" action> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem tag="button" action> ListGroupItem 4 </ListGroupItem>
                    <ListGroupItem disabled tag="button" action> ListGroupItem 5 </ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<ListGroup>
    <ListGroupItem active tag='button' action>ListGroupItem 1</ListGroupItem>
    <ListGroupItem tag='button' action> ListGroupItem 2 </ListGroupItem>
    <ListGroupItem tag='button' action> ListGroupItem 3 </ListGroupItem>
    <ListGroupItem tag='button' action> ListGroupItem 4 </ListGroupItem>
    <ListGroupItem disabled tag='button' action> ListGroupItem 5 </ListGroupItem>
</ListGroup>`}
                    options={{
                    mode: 'jsx',
                    lineNumbers: false,
                    readOnly: true            
                    }}
                />
            </Col>
        </React.Fragment>
    )).add('Contextual Classes', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group - Contextual Classes</h4>
                <br/>
                <p>Add <code>color={`'success'`}</code> property to a ListGroupItem.</p>
                <hr/>
                <h6><strong>Example</strong></h6>
                <hr/>
                <ListGroup>
                    <ListGroupItem color="success">ListGroupItem 1</ListGroupItem>
                    <ListGroupItem color="info"> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem color="warning"> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem color="danger"> ListGroupItem 4 </ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<ListGroup>
    <ListGroupItem color='success'>ListGroupItem 1</ListGroupItem>
    <ListGroupItem color='info'> ListGroupItem 2 </ListGroupItem>
    <ListGroupItem color='warning'> ListGroupItem 3 </ListGroupItem>
    <ListGroupItem color='danger'> ListGroupItem 4 </ListGroupItem>
</ListGroup>`}
                    options={{
                    mode: 'jsx',
                    lineNumbers: false,
                    readOnly: true            
                    }}
                />
            </Col>
        </React.Fragment>
    )).add('Custom Content', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group - Custom Content</h4>
                <br/>
                <p>Add <code>ListGroupItemHeading</code> <code>ListGroupItemText</code> components to a ListGroupItem.</p>
                <hr/>
                <h6><strong>Example</strong></h6>
                <hr/>
                <ListGroup>
                    <ListGroupItem active>
                        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
                        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
                        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
                        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<ListGroup>
    <ListGroupItem active>
        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
    </ListGroupItem>
    <ListGroupItem>
        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
    </ListGroupItem>
    <ListGroupItem>
        <ListGroupItemHeading>ListGroupItem Heading</ListGroupItemHeading>
        <ListGroupItemText>ListGroupItem Text</ListGroupItemText>
    </ListGroupItem>
</ListGroup>`}
                    options={{
                    mode: 'jsx',
                    lineNumbers: false,
                    readOnly: true            
                    }}
                />
            </Col>
        </React.Fragment>
    )).add('Flush', () => (
        <React.Fragment>
            <Col sm={8} style={{ marginTop: 30, marginLeft: 30 }}>
                <h4>List Group - Flush</h4>
                <br/>
                <p>Add <code>flush</code> property to a ListGroup.</p>
                <hr/>
                <h6><strong>Example</strong></h6>
                <hr/>
                <ListGroup flush>
                    <ListGroupItem disabled tag="a" href="#">ListGroupItem 1</ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 2 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 3 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 4 </ListGroupItem>
                    <ListGroupItem tag="a" href="#"> ListGroupItem 5 </ListGroupItem>
                </ListGroup>
                <br/>
                <br/>
                <h6><strong>Code</strong></h6>
                <hr />
                <CodeMirror
                    value={`<ListGroup flush>
    <ListGroupItem disabled tag='a' href='#'>ListGroupItem 1</ListGroupItem>
    <ListGroupItem tag='a' href='#'> ListGroupItem 2 </ListGroupItem>
    <ListGroupItem tag='a' href='#'> ListGroupItem 3 </ListGroupItem>
    <ListGroupItem tag='a' href='#'> ListGroupItem 4 </ListGroupItem>
    <ListGroupItem tag='a' href='#'> ListGroupItem 5 </ListGroupItem>
</ListGroup>`}
                    options={{
                    mode: 'jsx',
                    lineNumbers: false,
                    readOnly: true            
                    }}
                />
            </Col>
        </React.Fragment>
    ));