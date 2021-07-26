import ButtonArray, { IButtonArrayProps } from './ButtonArray'

export default {
    title: 'Buttons/Button Array',
    component: ButtonArray,
};
  
  export const Plain = (args : IButtonArrayProps) => {
    return <ButtonArray {...args}/>;
  }
  
  Plain.args = {
    buttons: [
      {
        id: "a",
        label: "First button"
      },
      {
        id: "b",
        label: "Second button"
      }
    ]
  } as IButtonArrayProps