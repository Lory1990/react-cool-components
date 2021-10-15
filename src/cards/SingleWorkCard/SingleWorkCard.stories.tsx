import { Story } from '@storybook/react';
import SingleWorkCard, { ISingleWorkCard } from './SingleWorkCard'

export default {
    title: 'Cards/SingleWorkCard',
    component: SingleWorkCard,
};


const Template = (args: ISingleWorkCard) => <SingleWorkCard {...args} />


export const Standard: Story<ISingleWorkCard> = Template.bind({})