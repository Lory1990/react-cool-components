import { Meta } from '@storybook/react';
import TextInput, { ITextInputProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput,
} as Meta;
  
export const Plain = (args: ITextInputProps) => {
  return <TextInput {...args}/>;
}

Plain.args = {
    label: 'Text field label' 
};