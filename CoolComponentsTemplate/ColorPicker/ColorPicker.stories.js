import ColorPicker from './'

export default {
    title: 'Inputs/ColorPicker',
    component: ColorPicker,    
};
  
  export const Plain = (args) => {
    return <ColorPicker {...args}/>;
  }
  