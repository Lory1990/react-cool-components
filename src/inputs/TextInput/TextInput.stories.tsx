import { Meta } from '@storybook/react';
import TextInput, { ITextInputProps } from './TextInput'
import { getStoryPath } from "utils/FileUtils"
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
  
export const Plain = (args: ITextInputProps) => {
  return <TextInput {...args}/>;
}

Plain.args = {
    label: 'Text field label' 
};