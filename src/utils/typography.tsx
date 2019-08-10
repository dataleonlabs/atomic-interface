import React from 'react';
import { Button } from '../index';


/**
 * Typography render element
 */
const Typography = () => (
    <div style={{ height: '100%', margin: '5%' }}>
        <div style={{ height: '80%', padding: '2%' }}>
            <h1>Typography</h1>
            <hr />
        </div>
        <div style={{ padding: '2%' }}>
            <p>Hello World!!</p>
            <p>An Adptable Foundation</p>
        </div>

        <div style={{ width: '100%', padding: '2%' }}>
            <div style={{ float: 'left', width: "50%", paddingRight: "5%" }}>
                <p>Heading 3</p>

                <p style={{ color: 'green' }}>
                    Create a list with all possible keywords that fit to your product,services orbussiness field.
                    The more the better.So you will get also a lot of keywords which you must pay for only the minimal.
</p>

                <p style={{ color: 'green', paddingTop: '5%' }}>
                    Benifit frommisspelling in i\orser to find keywords which your competitors didnot think of For example if you have aemergencyservices,
                    do not only bid for "emergency" but also for "imergency" 
</p>
            </div>
            <div style={{ paddingRight: '5%' }}>
                <p>Heading 4</p>
                <p style={{ color: 'green' }}>
                Create a list with all possible keywords that fit to your product,services orbussiness field.
                The more the better.So you will get also a lot of keywords which you must pay for only the minimal.

             </p>
                <p  style={{marginTop:"5%"}}>Heading 5</p>
                <p style={{ marginTop: '0px', display: 'block' }}>
                Create a list with all possible keywords that fit to your product,services orbussiness field.
               </p>
            </div>
        </div>
        <div style={{ width: '100%', marginTop: '5%' }}>
            <div style={{ width: '100%', }}>
                <div style={{ float: 'left' }}>
                    <h1>H1/Rubick regular</h1></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <p style={{ fontSize: '30px' }}>30px</p>
                </div>
                <div style={{ clear: 'both' }} ></div>
            </div>
            <hr />
            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <h2>H2/Rubick regular</h2></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <p style={{ fontSize: '26px' }}>26px</p>
                </div>
                <div style={{ clear: 'both' }} ></div>
            </div><hr />


            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <h3>H3/Rubick regular</h3></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <p style={{ fontSize: '20px' }}>20px</p>
                </div>
                <div style={{ clear: 'both' }} ></div>
            </div>
            <hr />


            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <h4>H4/Rubick regular</h4></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <p style={{ fontSize: '18px' }}>18px</p>
                </div>
                <div style={{ clear: 'both' }} ></div>
            </div>

            <hr />

            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <h5>H5/Rubick regular</h5></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <p style={{ fontSize: '16px' }}>16px</p>
                </div>
                <div style={{ clear: 'both' }} ></div>
            </div>
            <hr />


            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <caption>caption</caption></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <p style={{ fontSize: '14px' }}>14px</p>
                </div>
                <div style={{ clear: 'both' }} ></div>
            </div>
            <hr />

            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <Button value='Button label' color="primary" style={{ fontSize: '12px' }}>Button label</Button></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <p style={{ fontSize: '12px' }}>12px</p>
                </div>
                <div style={{ clear: 'both', }} ></div>
            </div>
            <hr />

            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <p style={{ fontSize: '14px' }}>Text/Rubic light</p></div>
                    <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>

                        <p style={{ fontSize: '14px' }}>14px</p>
                    </div>
                    <div style={{ clear: 'both', }} ></div>
                </div>
                <hr />

                <div style={{ width: '100%' }}>
                    <div style={{ float: 'left' }}>
                        <a href='#'> Text Link</a></div>
                    <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                        <p style={{ fontSize: '14px' }}>14px</p>
                    </div>
                    <div style={{ clear: 'both' }} ></div>
                </div>
                <hr />
            </div>

        </div>

        )
        
        export default Typography;
