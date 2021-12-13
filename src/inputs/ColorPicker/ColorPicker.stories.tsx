import ColorPicker, { IColorPickerProps } from "./ColorPicker"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import { Meta, Story } from "@storybook/react"

export default {
    title: "Inputs/ColorPicker",
    component: ColorPicker,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
}

const Template = (args: IColorPickerProps) => <ColorPicker {...args} />

export const Plain: Story<IColorPickerProps> = Template.bind({})
export const Disabled: Story<IColorPickerProps> = Template.bind({})
export const Loading: Story<IColorPickerProps> = Template.bind({})
export const Success: Story<IColorPickerProps> = Template.bind({})
export const Warning: Story<IColorPickerProps> = Template.bind({})
export const Error: Story<IColorPickerProps> = Template.bind({})
export const ReadOnly: Story<IColorPickerProps> = Template.bind({})
export const Tooltip: Story<IColorPickerProps> = Template.bind({})

const standardProps: IColorPickerProps = {
    colors: ["#A0D7E7", "#A5CEA1", "#FFCE73", "#FF9A7B", "#FFA2C0"],
    label: "This is the checkbox"
}

Plain.args = {
    ...standardProps
} as IColorPickerProps

Disabled.args = {
    disabled: true,
    ...standardProps
} as IColorPickerProps

Tooltip.args = {
    ...standardProps,
    tooltip: {
        title: "This is the tooltip"
    }
} as IColorPickerProps

Error.args = {
    errorMessage: "This is the error",
    ...standardProps
} as IColorPickerProps

Warning.args = {
    errorMessage: "This is the warning",
    ...standardProps
} as IColorPickerProps

Loading.args = {
    ...standardProps,
    loading: true
} as IColorPickerProps

Success.args = {
    ...standardProps,
    success: true
} as IColorPickerProps

ReadOnly.args = {
    ...standardProps,
    readOnly: true
} as IColorPickerProps
