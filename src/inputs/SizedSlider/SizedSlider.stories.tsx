import SizedSlider, { ISizedSliderProps } from "./SizedSlider"
import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import React from "react"


export default {
    title: "Inputs/SizedSlider",
    component: SizedSlider,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: ISizedSliderProps) => <SizedSlider {...args} />

export const Plain: Story<ISizedSliderProps> = Template.bind({})
export const Labelled: Story<ISizedSliderProps> = Template.bind({})
export const Disabled: Story<ISizedSliderProps> = Template.bind({})
export const Error: Story<ISizedSliderProps> = Template.bind({})
export const Warning: Story<ISizedSliderProps> = Template.bind({})
export const Loading: Story<ISizedSliderProps> = Template.bind({})
export const Success: Story<ISizedSliderProps> = Template.bind({})

Plain.args = {
     value: 70,
    onChange: () =>{}
} as ISizedSliderProps

Labelled.args = {
    label: "Select time",
     value: 50,
    onChange: () =>{}
} as ISizedSliderProps

Disabled.args = {
    disabled: true,
     value: 0,
    onChange: () =>{}
} as ISizedSliderProps

Loading.args = {
    loading: true,
     value: 0,
    onChange: () =>{}
} as ISizedSliderProps

Warning.args = {
    warningMessage: "Warning",
     value: 0,
    onChange: () =>{}
} as ISizedSliderProps

Error.args = {
    errorMessage: "Error",
     value: 5,
    onChange: () =>{}
} as ISizedSliderProps

Success.args = {
    success: true,
     value: 100,
    onChange: () =>{}
} as ISizedSliderProps
