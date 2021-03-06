import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SuperRange } from './SuperRange';


export default {
  title: 'Components/RangeInput/SingleRange',
  component: SuperRange,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof SuperRange>;


const Template: ComponentStory<typeof SuperRange> = (args) => <SuperRange {...args} />;

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
    max: 200
};



export const Controlled = Template.bind({});
Controlled.args = {
    // todo: create local state.. (reed new storybook documentation)
};

export const ControlledWithValueIndicator = Template.bind({});
ControlledWithValueIndicator.args = {
    // todo: create local state.. (reed new storybook documentation)
    withValueIndicator: true
};