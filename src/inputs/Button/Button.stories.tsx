import Button, { IStandardButtonProps } from './Button'

export default {
    title: 'Buttons/Button',
    component: Button,
};
  
export const Plain = (args : IStandardButtonProps) => {
  return <Button {...args}>Bottone</Button>;
}

export const Contained = (args : IStandardButtonProps) => {
  return <Button {...args} variant='contained'>Bottone</Button>;
}

export const ContainedPrimary = (args : IStandardButtonProps) => {
  return <Button {...args} variant='contained' color='primary'>Bottone</Button>;
}

export const ContainedSecondary = (args : IStandardButtonProps) => {
  return <Button {...args} variant='contained' color='secondary'>Bottone</Button>;
}
  