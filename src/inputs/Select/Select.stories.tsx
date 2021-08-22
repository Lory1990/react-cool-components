import Select, { ISelectComponentProps } from "./Select"
import { Meta, Story } from "@storybook/react"
import { getStoryPath } from "utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Inputs/Select",
    component: Select,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

export const Plain = (args: ISelectComponentProps) => {
    return <Select {...args} />
}

Plain.args = {
    label: "Select a fruit",
    values: [
        {
            key: "apple",
            value: "apple"
        },
        {
            key: "pear",
            value: "pear"
        }
    ]
} as ISelectComponentProps
