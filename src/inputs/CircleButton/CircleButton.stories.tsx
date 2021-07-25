import { Meta } from '@storybook/react';
import CircleButton, { ICircleButtonProps } from './CircleButton';
import { getStoryPath } from "utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Inputs/CircleButton",
    component: CircleButton,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        },
    }
} as Meta

export const Plain = (args : ICircleButtonProps) => <CircleButton {...args} />;

Plain.args = {
    label: "This is the circle button"
} as ICircleButtonProps


export const WithTooltip = (args : ICircleButtonProps) => <CircleButton {...args} />;

WithTooltip.args = {
    label: "This is the circle button",
    tooltip: "This is the tooltip",
} as ICircleButtonProps

export const WithErrorAndWarning = (args : ICircleButtonProps) => <CircleButton {...args} />;

WithTooltip.args = {
    label: "This is the circle button",
    tooltip: "This is the tooltip",
    errorMessage: "This is the error",
    warningMessage: "This is the warning",
} as ICircleButtonProps