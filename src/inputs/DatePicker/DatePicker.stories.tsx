import DatePicker, { IDatePickerProps } from "./DatePicker"
import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Inputs/DatePicker",
    component: DatePicker,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: IDatePickerProps) => <DatePicker {...args} />

export const Plain: Story<IDatePickerProps> = Template.bind({})
export const Disabled: Story<IDatePickerProps> = Template.bind({})
export const Error: Story<IDatePickerProps> = Template.bind({})
export const Warning: Story<IDatePickerProps> = Template.bind({})
export const Loading: Story<IDatePickerProps> = Template.bind({})
export const Success: Story<IDatePickerProps> = Template.bind({})

Disabled.args = {
    disabled: true
} as Story<IDatePickerProps>

Loading.args = {
    loading: true
} as Story<IDatePickerProps>

Success.args = {
    success: true
} as Story<IDatePickerProps>
