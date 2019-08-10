import React from 'react';


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

        <div style={{ width: '100%' ,padding: '2%'}}>
            <div style={{ float: 'left', width: "50%", paddingRight: "5%" }}>
                <p>Heading 3</p>

                <p style={{ color: 'green' }}>
                    This paragraph
                    contains  a lot of spaces
                    in the source         code,
                    but the  browser
                    but the browser
                    ignores it. This paragraph
                    contains a lot of spaces
                    in the source  code,but the  browser
                    but the browser
                    ignores it. 
</p>

                <p style={{ color: 'green',paddingTop:'5%' }}>
                    This paragraph
                    contains         a lot of spaces
                    in the source         code,
                    but the        browser
                    ignores it.  This paragraph
                    contains         a lot of spaces
                    in the source         code,
</p>
            </div>
            <div style={{ paddingRight: '5%' }}>
                <p>Heading 4</p>
                <p style={{ color: 'green' }}>
                    This paragraph
                       contains         a lot of spaces
                       in the source         code,
                       but the        browser   T
                       ignores it.   his paragraph
                       contains         a lot of spaces
                       in the source         code,
                       but the        browser   T
               </p>
                <p >Heading 5</p>
                <p style={{ marginTop: '0px',display:'block' }}>This paragraph
                     contains         a lot of spaces
                     in the source         code,
                     but the        browser   T
                     ignores it.   his paragraph
                     contains         a lot of spaces
                     in the source         code
               </p>
            </div>
        </div>
        <div style={{ width: '100%', marginTop: '5%'  }}>
            <div style={{ width: '100%',  }}>
                <div style={{ float: 'left' }}>
                    <h1>H1/Rubick regular</h1></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    40px
                </div>
                <div style={{ clear: 'both'  }} ></div>
            </div>
            <hr />
            <div style={{  width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <h2>H2/Rubick regular</h2></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <font size='26px'>26px</font>
                </div>
                <div style={{ clear: 'both',  }} ></div>
            </div><hr />
            

            <div style={{ width: '100%'}}>
                <div style={{ float: 'left' }}>
                    <h3>H3/Rubick regular</h3></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <font size='20px'>20px</font>
                </div>
                <div style={{ clear: 'both',  }} ></div>
            </div>
        <hr />


            <div style={{  width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <h4>H4/Rubick regular</h4></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <font size='18px'>18px</font>
                </div>
                <div style={{ clear: 'both',  }} ></div>
            </div>

<hr />

            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <h5>H5/Rubick regular</h5></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <font size='16px'>16px</font>
                </div>
                <div style={{ clear: 'both',  }} ></div>
            </div>
<hr />


            <div style={{  width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <caption>caption</caption></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <font size='14px'>14px</font>
                </div>
                <div style={{ clear: 'both',  }} ></div>
            </div>
<hr />

            <div style={{  width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <button value='BUTTON LABLE' style={{ fontSize: '12px' }}>BUTTON LABLE</button></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <font size='12px'>12px</font>
                </div>
                <div style={{ clear: 'both',  }} ></div>
            </div>
<hr />

            <div style={{  width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <font size="14px">Text/Rubic light</font></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <font size='14px'>14px</font>
                </div>
                <div style={{ clear: 'both',  }} ></div>
            </div>
<hr />

            <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                    <a href='#'> Text Link</a></div>
                <div style={{ marginTop: '2%', float: 'right', paddingRight: '5%' }}>
                    <font size='14px'>14px</font>
                </div>
                <div style={{ clear: 'both',  }} ></div>
            </div>
            <hr />
        </div>

    </div>

)

export default Typography;
