import { Meta } from '@storybook/react';
import Select, { ISelectComponentProps } from './Select'
import { getStoryPath } from "utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: 'Inputs/Select',
    component: Select,    
    parameters: {
      storySource: {
          storyPath: getStoryPath(baseAbsolute, wd, file)
      },
  }
} as Meta;
  
  export const Plain = (args : ISelectComponentProps) => {
    return <Select {...args}/>;
  }

  Plain.args = {
    label: "La mia label"
  }  as ISelectComponentProps