import { Story } from "@storybook/react"
import SingleWorkCard, { ISingleWorkCardProps } from "./SingleWorkCard"

export default {
    title: "Cards/SingleWorkCard",
    component: SingleWorkCard
}

const Template = (args: ISingleWorkCardProps) => <SingleWorkCard {...args} />

export const Standard: Story<ISingleWorkCardProps> = Template.bind({})
export const NoButton: Story<ISingleWorkCardProps> = Template.bind({})
export const NoTitle: Story<ISingleWorkCardProps> = Template.bind({})

Standard.args = {
    buttonLink: "https://github.com/Lory1990/react-cool-components",
    buttonText: "Discover more",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imageData: {
        imageUrl: "https://source.unsplash.com/1600x900/?nature,water",
        title: "Paella dish"
    },
    link: "https://github.com/Lory1990/react-cool-components",
    title: "A simple title"
}

NoButton.args = {
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imageData: {
        imageUrl: "https://source.unsplash.com/1600x900/?nature,water",
        title: "Paella dish"
    },
    link: "https://github.com/Lory1990/react-cool-components",
    title: "A simple title"
}

NoTitle.args = {
    buttonLink: "https://github.com/Lory1990/react-cool-components",
    buttonText: "Discover more",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imageData: {
        imageUrl: "https://source.unsplash.com/1600x900/?nature,water",
        title: "Paella dish"
    },
    link: "https://github.com/Lory1990/react-cool-components"
}
