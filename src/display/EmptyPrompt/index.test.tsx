import * as React from 'react'
import * as enzyme from 'enzyme'
import { StyledActionPanel, StyledBody, StyledIcon, StyledEmptyPrompts, StyledTitle } from './style';
import EmptyPrompt from './index';
import Icon from './Icon';
import Title from './Title';
import BodyText from './BodyText';
import ActionPanel from './ActionPanel';
import Spacer from '../Spacer/index';
import Button from '../../form/controls/Button/index';
import { Info } from 'react-feather';

describe('<Empty Prompt />', () => {
  it('U-TEST-1 - Test Rendering', () => {
    const wrapper = enzyme.mount(
      <EmptyPrompt>
        <Icon>
          <Info size={60} />
        </Icon>
        <Spacer size="sm" />
        <Title size="large">
          You have no spice
            </Title>
        <Spacer size="sm" />
        <BodyText size="small">
          <p>Navigators use massive amounts of spice to gain a limited form of prescience. This allows them to safely navigate interstellar space, enabling trade and travel throughout the galaxy.</p>
          <p>You’ll need spice to rule Arrakis, young Atreides.</p>
        </BodyText>
        <Spacer size="sm" />
        <ActionPanel>
          <Button color="primary">Button 1</Button>
        </ActionPanel>
      </EmptyPrompt>
    )
    expect(wrapper.find(StyledEmptyPrompts)).toHaveLength(1);
    expect(wrapper.find(StyledIcon)).toHaveLength(1);
    expect(wrapper.find(StyledTitle)).toHaveLength(1);
    expect(wrapper.find(StyledBody)).toHaveLength(1);
    expect(wrapper.find(StyledActionPanel)).toHaveLength(1);
  })
})