import Select from './'

export default {
    title: 'Inputs/Select',
    component: Select,    
};
  
  export const Plain = (args) => {
    return <Select {...args}/>;
  }

  Plain.args = {
    label: "La mia label"
  }
  