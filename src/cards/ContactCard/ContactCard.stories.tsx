import { Meta, Story } from "@storybook/react"
import ContactCard, { IContactCardProps } from "./ContactCard"
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Cards/ContactCard",
    component: ContactCard,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: IContactCardProps) => <ContactCard {...args} />

export const Plain: Story<IContactCardProps> = Template.bind({})
export const Loading: Story<IContactCardProps> = Template.bind({})

Plain.args = {} as IContactCardProps
Loading.args = {
    loading: true
} as IContactCardProps
