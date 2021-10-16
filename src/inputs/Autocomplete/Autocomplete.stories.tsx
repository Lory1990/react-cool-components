import Autocomplete, { IAutocompleteProps } from "./Autocomplete"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"
import { Meta, Story } from "@storybook/react"

export default {
    title: "Inputs/Autocomplete",
    component: Autocomplete,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

interface ISampleOption {
    label?: string
    price?: number
}

const options: ISampleOption[] = [
    { label: "Strawberry", price: 32 },
    { label: "Banana", price: 8 },
    { label: "Kiwi", price: 28 }
]

interface IAutocompletePropsStory extends IAutocompleteProps<ISampleOption, boolean, boolean, boolean> {}

const Template = (args: IAutocompletePropsStory) => <Autocomplete {...args} />

export const Plain: Story<IAutocompletePropsStory> = Template.bind({})
export const Disabled: Story<IAutocompletePropsStory> = Template.bind({})
export const Loading: Story<IAutocompletePropsStory> = Template.bind({})
export const Success: Story<IAutocompletePropsStory> = Template.bind({})
export const Warning: Story<IAutocompletePropsStory> = Template.bind({})
export const Error: Story<IAutocompletePropsStory> = Template.bind({})
export const Tooltip: Story<IAutocompletePropsStory> = Template.bind({})

Plain.args = {
    label: "Text field label",
    options
}

Disabled.args = {
    ...Plain.args,
    disabled: true
}

Warning.args = {
    ...Plain.args,
    warningMessage: "This is the warning message"
}

Error.args = {
    ...Plain.args,
    errorMessage: "This is the error message"
}

Loading.args = {
    ...Plain.args,
    loading: true
}

Success.args = {
    ...Plain.args,
    success: true
}

Tooltip.args = {
    ...Plain.args,
    tooltip: {
        title: "Tooltip",
        type: "SUCCESS"
    }
}
