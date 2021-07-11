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
    
};