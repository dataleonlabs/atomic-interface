// .storybook/config.ts
import React from 'react'
import { configure, addParameters, addDecorator }from '@storybook/react';
const req = require.context('../src', true, /\.stories\.tsx$/);
import { GlobalStyle } from "../src/utils/ThemeProvider"


function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  );
}

// Option defaults:
addParameters({
  options: {
    /**
     * name to display in the top left corner
     * @type {String} 
     */
    name: 'Atomic Interface',
    /**
     * URL for name in top left corner to link to
     * @type {String} 
     */
    url: '#',
    /**
     * show story component as full screen
     * @type {Boolean} 
     */
    goFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean} 
     */
    showStoriesPanel: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean} 
     */
    showAddonPanel: false,
    /**
     * display floating search box to search through stories
     * @type {Boolean} 
     */
    showSearchBox: true,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean} 
     */
    addonPanelInRight: true,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex} 
     */
    hierarchySeparator: null,

    /**
     * sidebar tree animations
     * @type {Boolean} 
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String} 
     */
    selectedPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean} 
     */
    enableShortcuts: true, // true by default
    /**
     * show/hide tool bar
     * @type {Boolean} 
     */
    isToolshown: false, // true by default
  },
});

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);

addDecorator(withGlobalStyles);


