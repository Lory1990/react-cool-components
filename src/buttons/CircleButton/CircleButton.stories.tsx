import { Meta, Story } from "@storybook/react"
import CircleButton, { ICircleButtonProps } from "./CircleButton"
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Buttons/CircleButton",
    component: CircleButton,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: ICircleButtonProps) => <CircleButton {...args} />

export const Plain: Story<ICircleButtonProps> = Template.bind({})
export const Disabled: Story<ICircleButtonProps> = Template.bind({})

Plain.args = {
    children: "A",
} as ICircleButtonProps

Disabled.args = {
    children: "A",
    disabled: true
} as ICircleButtonProps
