import Checkbox from './Checkbox'

export default {
    title: 'Inputs/Checkbox',
    component: Checkbox,    
};
  
  export const Plain = (args) => {
    return <Checkbox {...args}/>;
  }
  

  Plain.args={
    label: "Io sono una checkbox"
  }