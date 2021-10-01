import { Meta, Story } from '@storybook/react';
import CheckBox, { ICheckBoxProps } from './CheckBox';
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Inputs/CheckBox",
    component: CheckBox,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        },
    }
} as Meta

const Template = (args : ICheckBoxProps) => <CheckBox {...args} />;


export const Plain : Story<ICheckBoxProps> = Template.bind({})
export const WithTooltip : Story<ICheckBoxProps> = Template.bind({})
export const WithErrorAndWarning : Story<ICheckBoxProps> = Template.bind({})

Plain.args = {
    label: "This is the checkbox"
} as ICheckBoxProps


WithTooltip.args = {
    label: "This is the checkbox",
    tooltip: "This is the tooltip",
} as ICheckBoxProps

WithErrorAndWarning.args = {
    label: "This is the checkbox",
    tooltip: "This is the tooltip",
    errorMessage: "This is the error",
    warningMessage: "This is the warning",
} as ICheckBoxProps