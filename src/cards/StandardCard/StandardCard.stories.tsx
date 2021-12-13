import { Story } from '@storybook/react';
import StandardCard from './StandardCard'
import { IStandardCard } from './interfaces/IStandardCard'

export default {
	title: 'Cards/StandardCard',
	component: StandardCard,
};


const Template = (args: IStandardCard) => <StandardCard {...args} />


export const Standard: Story<IStandardCard> = Template.bind({})

Standard.args = {
	copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
	imageData: {
		imageUrl: "https://source.unsplash.com/1600x900/?nature,water",
		title: "Paella dish"
	},
	link: "https://github.com/Lory1990/react-cool-components",
	title: "Blog article and data over the top"
}