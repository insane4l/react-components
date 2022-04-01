import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SuperTextField } from './SuperTextFIeld';


export default {
  title: 'Components/TextField',
  component: SuperTextField
} as ComponentMeta<typeof SuperTextField>;


const Template: ComponentStory<typeof SuperTextField> = (args) => <div style={{width: '250px'}}><SuperTextField {...args} /></div>;



export const Uncontrolled = Template.bind({});
Uncontrolled.args = {

};


export const Controlled = Template.bind({});
Controlled.args = {
    // todo: create local state.. (reed new storybook documentation)
    // value:
    // onChangeText:
    // onEnter:
};


export const ControlledWithError = Template.bind({});
ControlledWithError.args = {
    // todo: create local state.. (reed new storybook documentation)
    // value:
    // onChangeText:
    // onEnter:
    error: 'Validation error'
};