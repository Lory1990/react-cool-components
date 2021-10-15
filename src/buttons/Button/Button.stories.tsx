import { Story } from '@storybook/react';
import Button, { IStandardButtonProps } from './Button'

export default {
    title: 'Buttons/Button',
    component: Button,
};

const Template = (args : IStandardButtonProps) => <Button {...args}>Bottone</Button>;
  
export const Primary : Story<IStandardButtonProps>  = Template.bind({});
export const Secondary  : Story<IStandardButtonProps> = Template.bind({});
export const Contained  : Story<IStandardButtonProps> = Template.bind({});
export const ContainedPrimary  : Story<IStandardButtonProps> = Template.bind({});
export const ContainedSecondary  : Story<IStandardButtonProps> = Template.bind({});
export const Outlined  : Story<IStandardButtonProps> = Template.bind({});
export const OutlinedSecondary : Story<IStandardButtonProps>  = Template.bind({});
export const Disabled : Story<IStandardButtonProps>  = Template.bind({});
export const DisabledContainedPrimary  : Story<IStandardButtonProps> = Template.bind({});
export const DisabledContainedSecondary  : Story<IStandardButtonProps> = Template.bind({});
export const DisabledOutlined : Story<IStandardButtonProps>  = Template.bind({});
export const DisabledOutlinedSecondary  : Story<IStandardButtonProps> = Template.bind({});


Primary.args = {
  color: "primary"
} as IStandardButtonProps

Secondary.args = {
  color: "secondary"
} as IStandardButtonProps

Contained.args = {
  variant: "contained"
} as IStandardButtonProps

ContainedPrimary.args = {
  variant: "contained",
  color: "primary"
} as IStandardButtonProps

Outlined.args = {
  variant: "outlined",
  color: "primary"
} as IStandardButtonProps

OutlinedSecondary.args = {
  variant: "outlined",
  color: "secondary"
} as IStandardButtonProps

ContainedSecondary.args = {
  variant: "contained",
  color: "secondary"
} as IStandardButtonProps

Disabled.args = {
  disabled: true,
} as IStandardButtonProps

DisabledContainedPrimary.args = {
  disabled: true,
  variant: "contained",
  color: "primary",
} as IStandardButtonProps

DisabledContainedSecondary.args = {
  disabled: true,
  variant: "contained",
  color: "secondary",
} as IStandardButtonProps

DisabledOutlined.args = {
  disabled: true,
  variant: "outlined",
  color: "secondary",
} as IStandardButtonProps

DisabledOutlinedSecondary.args = {
  disabled: true,
  variant: "outlined",
  color: "secondary",
} as IStandardButtonProps
