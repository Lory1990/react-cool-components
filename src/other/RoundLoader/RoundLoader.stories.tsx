import RoundLoader from "./RoundLoader"
import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import { CircularProgressProps } from "@material-ui/core"

export default {
    title: "Other/RoundLoader",
    component: RoundLoader,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: CircularProgressProps) => <RoundLoader {...args} />

export const Plain: Story<CircularProgressProps> = Template.bind({})
export const ColorSecondary: Story<CircularProgressProps> = Template.bind({})
export const WithValue: Story<CircularProgressProps> = Template.bind({})
export const WithTickness: Story<CircularProgressProps> = Template.bind({})
export const Static: Story<CircularProgressProps> = Template.bind({})

Plain.args = {
    
} as CircularProgressProps

WithTickness.args = {
    thickness: 5,
} as CircularProgressProps

ColorSecondary.args = {
    color: "secondary"
} as CircularProgressProps

WithValue.args = {
    value: 30,
    variant: "determinate"
} as CircularProgressProps

Static.args = {
    value: 20,
    variant: "static"
} as CircularProgressProps
