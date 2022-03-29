import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paginator } from './Paginator';


export default {
  title: 'Components/Paginator',
  component: Paginator,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof Paginator>;


const Template: ComponentStory<typeof Paginator> = (args) => <Paginator {...args} />;

export const StandardView = Template.bind({});
StandardView.args = {
    currentPage: 1,
    totalItemsCount: 300,
    pageSize: 10,
};