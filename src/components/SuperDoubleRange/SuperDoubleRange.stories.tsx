import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SuperDoubleRange } from './SuperDoubleRange';


export default {
  title: 'Components/RangeInput/DoubleRange',
  component: SuperDoubleRange,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof SuperDoubleRange>;


const Template: ComponentStory<typeof SuperDoubleRange> = (args) => <SuperDoubleRange {...args} />;




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
    withValueIndicators: true
};