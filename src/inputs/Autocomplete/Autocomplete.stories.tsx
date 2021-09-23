import Autocomplete from './Autocomplete'

export default {
    title: 'Inputs/Autocomplete',
    component: Autocomplete,    
};
  
  export const Plain = (args) => {
    return <Autocomplete {...args}/>;
  }
  