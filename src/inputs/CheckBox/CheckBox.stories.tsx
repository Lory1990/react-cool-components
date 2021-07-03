import { Meta } from '@storybook/react';
import CheckBox, { ICheckBoxProps } from './CheckBox';

export default {
    title: "Components/CheckBox",
    component: CheckBox,
} as Meta

export const Template = (args : ICheckBoxProps) => <CheckBox {...args} />;

Template.args = {
    label: 'CheckBox Label' 
};