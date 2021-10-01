import { Meta, Story } from '@storybook/react';
import TextInput, { ITextInputProps } from './TextInput'
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"


export default {
    title: 'Inputs/TextInput',
    component: TextInput,
    parameters: {
      storySource: {
          storyPath: getStoryPath(baseAbsolute, wd, file)
      },
  }
} as Meta;
  
const Template = (args: ITextInputProps) => <TextInput {...args}/>;

export const Plain : Story<ITextInputProps> = Template.bind({})
export const Disabled : Story<ITextInputProps> = Template.bind({})
export const WithWarning : Story<ITextInputProps> = Template.bind({})
export const WithError : Story<ITextInputProps> = Template.bind({})
export const WithTooltip : Story<ITextInputProps> = Template.bind({})
export const Password : Story<ITextInputProps> = Template.bind({})
export const Number : Story<ITextInputProps> = Template.bind({})

Plain.args = {
    label: 'Text field label' 
};

Disabled.args = {
  disabled: true,
  label: 'Text field label' 
};

Disabled.args = {
  disabled: true,
  label: 'Text field label' 
};

WithWarning.args = {
  warningMessage: "This is the warning message",
  label: 'Text field label' 
};

WithError.args = {
  warningMessage: "This is the error message",
  label: 'Text field label' 
};

WithTooltip.args = {
  tooltip: {
    title: "Tooltip",
    type: "SUCCESS"
  },
  label: 'Text field label' 
};

Password.args = {
  type: "password",
  label: 'Text field label' 
};

Number.args = {
  type: "number",
  min: -50,
  max: 50,
  label: 'Text field label' 
};