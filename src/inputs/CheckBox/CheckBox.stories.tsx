import React from 'react';

import { Meta } from '@storybook/react';
import CheckBox, { ICheckBoxProps } from './CheckBox';

export default {
    title: "Components/CheckBox",
    component: CheckBox,
} as Meta

// Button.stories.js

//👇 We create a “template” of how args map to rendering
export const Template = (args : ICheckBoxProps) => <CheckBox {...args} />;

//👇 Each story then reuses that template
//export const Primary = Template.bind({});
Template.args = { background: '#ff0', label: 'CheckBox' };