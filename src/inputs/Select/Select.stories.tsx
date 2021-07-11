import { Meta } from '@storybook/react';
import Select, { ISelectComponentProps } from './Select'

export default {
    title: 'Inputs/Select',
    component: Select,    
} as Meta;
  
  export const Plain = (args : ISelectComponentProps) => {
    return <Select {...args}/>;
  }

  Plain.args = {
    label: "La mia label"
  }  as ISelectComponentProps