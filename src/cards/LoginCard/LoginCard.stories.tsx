import { Meta, Story } from "@storybook/react"
import LoginCard, { ILoginCardProps } from "./LoginCard"
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Cards/LoginCard",
    component: LoginCard,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        },
        design: {
            type: "figma",
            url: "https://www.figma.com/file/iyH3v3Lgfzi10fpz2UrOf0/Tongy_redesign?node-id=1%3A2"
        }
    }
} as Meta

const Template = (args: ILoginCardProps) => <LoginCard {...args} />

export const Plain: Story<ILoginCardProps> = Template.bind({})
export const Loading: Story<ILoginCardProps> = Template.bind({})
export const Error: Story<ILoginCardProps> = Template.bind({})

Plain.args = {} as ILoginCardProps

Loading.args = {
    isLoading: true
} as ILoginCardProps

Error.args = {
    error: "This is the error"
} as ILoginCardProps
