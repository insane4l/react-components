import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SuperRange } from './SuperRange';


export default {
  title: 'Components/SuperRange',
  component: SuperRange,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof SuperRange>;


const Template: ComponentStory<typeof SuperRange> = (args) => <SuperRange {...args} />;

export const UncontrolledRange = Template.bind({});
UncontrolledRange.args = {
    max: 200
};



export const ControlledRange = Template.bind({});
ControlledRange.args = {
    // todo: create local state.. (reed new storybook documentation)
};

export const ControlledRangeWithValueIndicator = Template.bind({});
ControlledRangeWithValueIndicator.args = {
    // todo: create local state.. (reed new storybook documentation)
    withValueIndicator: true
};