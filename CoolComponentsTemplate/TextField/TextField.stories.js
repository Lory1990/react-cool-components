import TextField from './TextField'

export default {
    title: 'Inputs/TextField',
    component: TextField,    
};
  
  export const Plain = (args) => {
    return <TextField {...args}/>;
  }
  