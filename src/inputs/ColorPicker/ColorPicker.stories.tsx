import { Story } from "@storybook/react"
import ColorPicker, { IColorPickerProps } from "./ColorPicker"

export default {
    title: "Inputs/ColorPicker",
    component: ColorPicker
}

const Template = (args: IColorPickerProps) => <ColorPicker {...args} />

export const Plain: Story<IColorPickerProps> = Template.bind({})
export const Disabled: Story<IColorPickerProps> = Template.bind({})
export const WithTooltip: Story<IColorPickerProps> = Template.bind({})
export const WithError: Story<IColorPickerProps> = Template.bind({})
export const WithWarning: Story<IColorPickerProps> = Template.bind({})

const standardProps: IColorPickerProps = {
    colors: ["#A0D7E7", "#A5CEA1", "#FFCE73", "#FF9A7B", "#FFA2C0"]
}

Plain.args = {
    label: "This is the checkbox",
    ...standardProps
} as IColorPickerProps

Disabled.args = {
    disabled: true,
    ...standardProps
} as IColorPickerProps

WithTooltip.args = {
    label: "This is the checkbox",
    ...standardProps,
    tooltip: {
        title: "This is the tooltip"
    }
} as IColorPickerProps

WithError.args = {
    label: "This is the checkbox",
    errorMessage: "This is the error",
    ...standardProps
} as IColorPickerProps

WithWarning.args = {
    label: "This is the checkbox",
    errorMessage: "This is the warning",
    ...standardProps
} as IColorPickerProps
