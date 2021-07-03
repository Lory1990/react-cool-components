import Button from './Button'

export default {
    title: 'Buttons/Button',
    component: Button,
};
  
export const Plain = (args) => {
  return <Button {...args}>Bottone</Button>;
}

export const Contained = (args) => {
  return <Button {...args} variant='contained'>Bottone</Button>;
}

export const ContainedPrimary = (args) => {
  return <Button {...args} variant='contained' color='primary'>Bottone</Button>;
}

export const ContainedSecondary = (args) => {
  return <Button {...args} variant='contained' color='secondary'>Bottone</Button>;
}
  