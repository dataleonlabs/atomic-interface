import React from 'react';
import { storiesOf } from '@storybook/react';
import AsyncSelect from './index';
import { Col } from 'reactstrap';
import Form from './../../index';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import Button from '../Button';
require('codemirror/mode/jsx/jsx');

storiesOf('Forms|AsyncSelect', module)
    .add('Basic Example', () => {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ];

        const filterColors = (inputValue: string) => {
            return options.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        };

        const promiseOptions = inputValue =>
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(filterColors(inputValue));
                }, 1000);
            });

        return (
            <React.Fragment>
                <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
                    <h2>Form Elements - AsyncSelect</h2>
                    <br />
                    <hr />
                    <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
                    <br />
                    <h4>Basic Example</h4>
                    <br />
                    <p>Custom Asyncselect element with different <code>{`options`}</code>.</p>
                    <hr />
                    <h6><strong>Example</strong></h6>
                    <hr />
                    <Form>
                        {(values) => (
                            <>
                                <AsyncSelect
                                    label={'Sample'}
                                    name={'favorite'}
                                    placeholder={'Select Ice Cream'}
                                    defaultOptions={options}
                                    loadOptions={promiseOptions}
                                />
                                <Button type="submit">Submit</Button><br />
                                <code>values: {JSON.stringify(values.values)}</code><br />
                            </>
                        )}
                    </Form>
                    <br />
                    <br />
                    <h6><strong>Code</strong></h6>
                    <hr />
                    <CodeMirror
                        value={`<Form>
    {(values) => (
        <>
            <AsyncSelect
                label={'Sample'}
                name={'favorite'}
                placeholder={'Select Ice Cream'}
                defaultOptions={options}
                loadOptions={promiseOptions}
            />
            <Button type="submit">Submit</Button><br />
            <code>values: {JSON.stringify(values.values)}</code><br />
        </>
    )}
</Form>`}
                        options={{
                            mode: 'jsx',
                            lineNumbers: false,
                            readOnly: true
                        }}
                    />
                </Col>
            </React.Fragment>
        )
    }).add('Basic Example with Initial Values', () => {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ];

        const filterColors = (inputValue: string) => {
            return options.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        };

        const promiseOptions = inputValue =>
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(filterColors(inputValue));
                }, 1000);
            });

        return (
            <React.Fragment>
                <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
                    <h2>Form Elements - AsyncSelect</h2>
                    <br />
                    <hr />
                    <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
                    <br />
                    <h4>Basic Example</h4>
                    <br />
                    <p>Custom Asyncselect element with different <code>{`options`}</code>.</p>
                    <hr />
                    <h6><strong>Example</strong></h6>
                    <hr />
                    <Form
                        initialValues={{ "favorite": "chocolate" }}
                    >
                        {(values) => (
                            <>
                                <AsyncSelect
                                    label={'Sample'}
                                    name={'favorite'}
                                    placeholder={'Select Ice Cream'}
                                    defaultOptions={options}
                                    loadOptions={promiseOptions}
                                />
                                <Button type="submit">Submit</Button><br />
                                <code>values: {JSON.stringify(values.values)}</code><br />
                            </>
                        )}
                    </Form>
                    <br />
                    <br />
                    <h6><strong>Code</strong></h6>
                    <hr />
                    <CodeMirror
                        value={`<Form
    initialValues={{ "favorite": "chocolate" }}
>
    {(values) => (
        <>
            <AsyncSelect
                label={'Sample'}
                name={'favorite'}
                placeholder={'Select Ice Cream'}
                defaultOptions={options}
                loadOptions={promiseOptions}
            />
            <Button type="submit">Submit</Button><br />
            <code>values: {JSON.stringify(values.values)}</code><br />
        </>
    )}
</Form>`}
                        options={{
                            mode: 'jsx',
                            lineNumbers: false,
                            readOnly: true
                        }}
                    />
                </Col>
            </React.Fragment>
        )
    }).add('Basic Example Multi Selection', () => {

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ];

        const filterColors = (inputValue: string) => {
            return options.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        };

        const promiseOptions = inputValue =>
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(filterColors(inputValue));
                }, 1000);
            });
        return (
            <React.Fragment>
                <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
                    <h2>Form Elements - Select</h2>
                    <br />
                    <hr />
                    <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
                    <br />
                    <h4>Basic Example Multi Selection</h4>
                    <br />
                    <p>To enable multiple selection make true property just write <code>{`isMulti`}</code>.</p>
                    <hr />
                    <h6><strong>Example</strong></h6>
                    <hr />
                    <Form>
                        {(values) => (
                            <>
                                <AsyncSelect
                                    label={'Sample'}
                                    name={'favorite'}
                                    isMulti={true}
                                    placeholder={'Select Ice Cream'}
                                    loadOptions={promiseOptions}
                                />
                                <Button type="submit">Submit</Button><br />
                                <code>values: {JSON.stringify(values.values)}</code><br />
                            </>
                        )}
                    </Form>
                    <br />
                    <br />
                    <h6><strong>Code</strong></h6>
                    <hr />
                    <CodeMirror
                        value={`<Form>
    {(values) => (
        <>
            <AsyncSelect
                label={'Sample'}
                name={'favorite'}
                isMulti={true}
                placeholder={'Select Ice Cream'}
                defaultOptions={options}
                loadOptions={promiseOptions}
            />
            <Button type="submit">Submit</Button><br />
            <code>values: {JSON.stringify(values.values)}</code><br />
        </>
    )}
</Form>`}
                        options={{
                            mode: 'jsx',
                            lineNumbers: false,
                            readOnly: true
                        }}
                    />
                </Col>
            </React.Fragment>
        )
    }).add('Basic Example Multi Selection with Initial Values', () => {

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ];

        const filterColors = (inputValue: string) => {
            return options.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        };

        const promiseOptions = inputValue =>
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(filterColors(inputValue));
                }, 1000);
            });
        return (
            <React.Fragment>
                <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
                    <h2>Form Elements - Select</h2>
                    <br />
                    <hr />
                    <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
                    <br />
                    <h4>Basic Example Multi Selection</h4>
                    <br />
                    <p>To enable multiple selection make true property just write <code>{`isMulti`}</code>.</p>
                    <hr />
                    <h6><strong>Example</strong></h6>
                    <hr />
                    <Form
                        initialValues={{ "favorite": ["strawberry", "chocolate", "vanilla"] }}
                    >
                        {(values) => (
                            <>
                                <AsyncSelect
                                    label={'Sample'}
                                    name={'favorite'}
                                    isMulti={true}
                                    placeholder={'Select Ice Cream'}
                                    defaultOptions={options}
                                    loadOptions={promiseOptions}
                                />
                                <Button type="submit">Submit</Button><br />
                                <code>values: {JSON.stringify(values.values)}</code><br />
                            </>
                        )}
                    </Form>
                    <br />
                    <br />
                    <h6><strong>Code</strong></h6>
                    <hr />
                    <CodeMirror
                        value={`<Form
    initialValues={{ "favorite": ["strawberry", "chocolate", "vanilla"] }}
>
    {(values) => (
        <>
            <AsyncSelect
                label={'Sample'}
                name={'favorite'}
                isMulti={true}
                placeholder={'Select Ice Cream'}
                defaultOptions={options}
                loadOptions={promiseOptions}
            />
            <Button type="submit">Submit</Button><br />
            <code>values: {JSON.stringify(values.values)}</code><br />
        </>
    )}
</Form>`}
                        options={{
                            mode: 'jsx',
                            lineNumbers: false,
                            readOnly: true
                        }}
                    />
                </Col>
            </React.Fragment>
        )
    }).add('Basic Example readOnly', () => {

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ];

        const filterColors = (inputValue: string) => {
            return options.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
        };

        const promiseOptions = inputValue =>
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(filterColors(inputValue));
                }, 1000);
            });
        return (
            <React.Fragment>
                <Col sm={6} style={{ marginTop: 30, marginLeft: 30 }}>
                    <h2>Form Elements - Select</h2>
                    <br />
                    <hr />
                    <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
                    <br />
                    <h4>Basic Example Multi Selection</h4>
                    <br />
                    <p>To enable multiple selection make true property just write <code>{`isMulti`}</code>.</p>
                    <hr />
                    <h6><strong>Example</strong></h6>
                    <hr />
                    <Form>
                        {(values) => (
                            <>
                                <AsyncSelect
                                    label={'Sample'}
                                    name={'favorite'}
                                    readOnly={true}
                                    placeholder={'Select Ice Cream'}
                                    defaultOptions={options}
                                    loadOptions={promiseOptions}
                                />
                                <Button type="submit">Submit</Button><br />
                                <code>values: {JSON.stringify(values.values)}</code><br />
                            </>
                        )}
                    </Form>
                    <br />
                    <br />
                    <h6><strong>Code</strong></h6>
                    <hr />
                    <CodeMirror
                        value={`<Form>
    {(values) => (
        <>
            <AsyncSelect
                label={'Sample'}
                name={'favorite'}
                isMulti={true}
                placeholder={'Select Ice Cream'}
                defaultOptions={options}
                loadOptions={promiseOptions}
            />
            <Button type="submit">Submit</Button><br />
            <code>values: {JSON.stringify(values.values)}</code><br />
        </>
    )}
</Form>`}
                        options={{
                            mode: 'jsx',
                            lineNumbers: false,
                            readOnly: true
                        }}
                    />
                </Col>
            </React.Fragment>
        )
    });