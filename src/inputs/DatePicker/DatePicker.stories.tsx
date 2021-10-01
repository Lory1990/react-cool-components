import DatePicker, { IDatePickerProps } from "./DatePicker"
import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react"
import moment from "moment";

export default {
    title: "Inputs/DatePicker",
    component: DatePicker,
    parameters: {
        actions:{ argTypesRegex: ""  },
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: IDatePickerProps) => <MuiPickersUtilsProvider utils={MomentUtils}><DatePicker {...args} /></MuiPickersUtilsProvider>

export const Plain: Story<IDatePickerProps> = Template.bind({})
export const Labelled: Story<IDatePickerProps> = Template.bind({})
export const Disabled: Story<IDatePickerProps> = Template.bind({})
export const Error: Story<IDatePickerProps> = Template.bind({})
export const Warning: Story<IDatePickerProps> = Template.bind({})
export const Loading: Story<IDatePickerProps> = Template.bind({})
export const Success: Story<IDatePickerProps> = Template.bind({})

Plain.args = {
    value: moment(),
    onChange: () =>{}
} as IDatePickerProps

Labelled.args = {
    label: "Select time",
    value: moment(),
    onChange: () =>{}
} as IDatePickerProps

Disabled.args = {
    disabled: true,
    value: moment(),
    onChange: () =>{}
} as IDatePickerProps

Loading.args = {
    loading: true,
    value: moment(),
    onChange: () =>{}
} as IDatePickerProps

Warning.args = {
    warningMessage: "Warning",
    value: moment(),
    onChange: () =>{}
} as IDatePickerProps

Error.args = {
    errorMessage: "Error",
    value: moment(),
    onChange: () =>{}
} as IDatePickerProps

Success.args = {
    success: true,
    value: moment(),
    onChange: () =>{}
} as IDatePickerProps
