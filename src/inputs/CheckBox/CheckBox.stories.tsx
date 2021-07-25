import { Meta } from '@storybook/react';
import CheckBox, { ICheckBoxProps } from './CheckBox';
import { getStoryPath } from "utils/FileUtils"
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

export const Plain = (args : ICheckBoxProps) => <CheckBox {...args} />;

Plain.args = {
    label: "This is the checkbox"
} as ICheckBoxProps


export const WithTooltip = (args : ICheckBoxProps) => <CheckBox {...args} />;

WithTooltip.args = {
    label: "This is the checkbox",
    tooltip: "This is the tooltip",
} as ICheckBoxProps

export const WithErrorAndWarning = (args : ICheckBoxProps) => <CheckBox {...args} />;

WithTooltip.args = {
    label: "This is the checkbox",
    tooltip: "This is the tooltip",
    errorMessage: "This is the error",
    warningMessage: "This is the warning",
} as ICheckBoxProps