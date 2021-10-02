import { Story } from "@storybook/react"
import TwoElementsGallery, { TwoElementsGalleryProps } from './TwoElementsGallery'

export default {
    title: "TwoElementsGallery",
    component: TwoElementsGallery,
}

const Template = (args: TwoElementsGalleryProps) => <TwoElementsGallery {...args} />

export const Plain: Story<TwoElementsGalleryProps> = Template.bind({})

Plain.args = {
    imageLeft: "https://images.unsplash.com/photo-1626626925024-aaf056134c20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    imageRight: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
} as TwoElementsGalleryProps