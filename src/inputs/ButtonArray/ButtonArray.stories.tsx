import ButtonArray from './ButtonArray'

export default {
    title: 'Buttons/Button Array',
    component: ButtonArray,
};
  
  export const Plain = (args) => {
    return <ButtonArray {...args}/>;
  }
  