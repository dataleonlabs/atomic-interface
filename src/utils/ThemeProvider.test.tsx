import * as React from 'react'
import * as enzyme from 'enzyme'
import ThemeProvider, { GlobalStyle } from './ThemeProvider'
import { ThemeProvider as ThemeProviderBase } from 'styled-components';

describe('<ThemeProvider />', () => {
  it('U-TEST-1 - rendering theme with theme provider', () => {
    const wrapper = enzyme.mount(
      <ThemeProvider>
        <span>this is test case</span>
      </ThemeProvider>
    )
    expect(wrapper.find(ThemeProviderBase)).toHaveLength(1);
    expect(wrapper.find(GlobalStyle)).toHaveLength(1);
    expect(wrapper.contains(<span>this is test case</span>)).toBe(true);
  })
})
