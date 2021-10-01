import { Meta, Story } from '@storybook/react';
import YesNoPopover, { IYesNoPopoverProps } from './YesNoPopover';
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Popovers/YesNoPopover",
    component: YesNoPopover,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        },
    }
} as Meta

const Template = (args : IYesNoPopoverProps) => <YesNoPopover {...args} />;


export const Plain : Story<IYesNoPopoverProps> = Template.bind({})
export const CustomLabel : Story<IYesNoPopoverProps> = Template.bind({})
export const NoCancel : Story<IYesNoPopoverProps> = Template.bind({})
export const NoTitle : Story<IYesNoPopoverProps> = Template.bind({})
export const TitleAndText : Story<IYesNoPopoverProps> = Template.bind({})

Plain.args = {
    open: true
} as IYesNoPopoverProps


CustomLabel.args = {
    open: true,
    okLabel: "Si",
    closeLabel: "No",
} as IYesNoPopoverProps

TitleAndText.args = {
    open: true,
    title: "This is the title",
    content: "This is the content",
} as IYesNoPopoverProps

NoCancel.args = {
    open: true,
    showCancel: false,
} as IYesNoPopoverProps

NoTitle.args = {
    open: true,
    showTitle: false,
} as IYesNoPopoverProps