import { Story } from '@storybook/react';
import StandardCard from './StandardCard'
import { IStandardCard } from './StandardCard'

export default {
	title: 'Cards/StandardCard',
	component: StandardCard,
};


const Template = (args: IStandardCard) => <StandardCard {...args} />


export const Standard: Story<IStandardCard> = Template.bind({})

Standard.args = {

}