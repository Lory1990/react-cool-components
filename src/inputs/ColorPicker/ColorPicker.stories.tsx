import { Story } from '@storybook/react';
import ColorPicker, { IColorPickerProps } from './ColorPicker'

export default {
    title: 'Input/ColorPicker',
    component: ColorPicker,    
};
  
const Template =  (args: IColorPickerProps) => <ColorPicker {...args} />;
  
export const Plain : Story<IColorPickerProps> = Template.bind({})
export const Disabled : Story<IColorPickerProps> = Template.bind({})
export const WithTooltip : Story<IColorPickerProps> = Template.bind({})
export const WithError : Story<IColorPickerProps> = Template.bind({})
export const WithWarning : Story<IColorPickerProps> = Template.bind({})


Plain.args = {
  label: "This is the checkbox"
} as IColorPickerProps

Disabled.args = {
  disabled: true
} as IColorPickerProps

WithTooltip.args = {
  label: "This is the checkbox",
  tooltip: {
    title: "This is the tooltip"
  }
} as IColorPickerProps

WithError.args = {
  label: "This is the checkbox",
  errorMessage: "This is the error",
} as IColorPickerProps

WithWarning.args = {
  label: "This is the checkbox",
  errorMessage: "This is the warning",
} as IColorPickerProps