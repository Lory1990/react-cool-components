import { Story, Meta } from "@storybook/react"
import TwoElementsGallery, { ITwoElementsGalleryProps } from "./TwoElementsGallery"
import { getStoryPath } from "@utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Gallery/TwoElementsGallery",
    component: TwoElementsGallery,
    parameters: {
        layout: "centered",
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        }
    }
} as Meta

const Template = (args: ITwoElementsGalleryProps) => <TwoElementsGallery {...args} />

export const Plain: Story<ITwoElementsGalleryProps> = Template.bind({})
export const OnlyLeftImage: Story<ITwoElementsGalleryProps> = Template.bind({})
export const OnlyRightImage: Story<ITwoElementsGalleryProps> = Template.bind({})
export const NoImages: Story<ITwoElementsGalleryProps> = Template.bind({})

Plain.args = {
    imageLeft: "https://images.unsplash.com/photo-1626626925024-aaf056134c20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    imageLeftAlt: "Man",
    imageRight: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    imageRightAlt: "River"
} as ITwoElementsGalleryProps

OnlyLeftImage.args = {
    imageLeft: "https://images.unsplash.com/photo-1626626925024-aaf056134c20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    imageLeftAlt: "Man"
} as ITwoElementsGalleryProps

OnlyRightImage.args = {
    imageRight: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    imageRightAlt: "River"
} as ITwoElementsGalleryProps
