import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import BubbleButtonCard, { IBubbleButtonCardProps } from "./BubbleButtonCard"

export default {
    title: "Cards/BubbleButtonCard",
    component: BubbleButtonCard,
    parameters: {
        layout: "centered",
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: IBubbleButtonCardProps) => <BubbleButtonCard {...args} />

export const Plain: Story<IBubbleButtonCardProps> = Template.bind({})

Plain.args = {
    image: "https://images.unsplash.com/photo-1632967784501-7aa2c3d0f08b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    cardTitle: "Lorem title",
    textButton: "More Info",
    link: "#"
} as IBubbleButtonCardProps

