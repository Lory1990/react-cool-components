import { Story } from '@storybook/react';
import SingleWorkCard from './SingleWorkCard'
import ISingleWorkCard from './interfaces/ISingleWorkCard';

export default {
    title: 'Cards/SingleWorkCard',
    component: SingleWorkCard,
};


const Template = (args: ISingleWorkCard) => <SingleWorkCard {...args} />


export const Standard: Story<ISingleWorkCard> = Template.bind({})

Standard.args = {
    buttonLink: "https://github.com/Lory1990/react-cool-components",
    buttonText: "Discover more",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imageData: {
        imageUrl: "https://source.unsplash.com/1600x900/?nature,water",
        title: "Paella dish"
    },
    link: "https://github.com/Lory1990/react-cool-components",
    title: "Tongy"
}