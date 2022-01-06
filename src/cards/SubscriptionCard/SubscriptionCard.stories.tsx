import { Meta, Story } from "@storybook/react"
import SubscriptionCard, { ISubscriptionCardProps, SubscriptionCardTypology } from "./SubscriptionCard"
import { getStoryPath } from "../../utils/FileUtils"
import { baseAbsolute, file, wd } from "paths.macro"

export default {
    title: "Cards/SubscriptionCard",
    component: SubscriptionCard,
    parameters: {
        storySource: {
            storyPath: getStoryPath(baseAbsolute, wd, file)
        },
        design: {
            type: "figma",
            url: "https://www.figma.com/file/iyH3v3Lgfzi10fpz2UrOf0/Tongy_redesign?node-id=10%3A573"
        }
    }
} as Meta

const Template = (args: ISubscriptionCardProps) => <SubscriptionCard {...args} />

export const Standard: Story<ISubscriptionCardProps> = Template.bind({})
export const StandardTwoMonths: Story<ISubscriptionCardProps> = Template.bind({})
export const Package: Story<ISubscriptionCardProps> = Template.bind({})
export const MostConvenient: Story<ISubscriptionCardProps> = Template.bind({})
export const NoFeatures: Story<ISubscriptionCardProps> = Template.bind({})
export const WithDescription: Story<ISubscriptionCardProps> = Template.bind({})
export const Disabled: Story<ISubscriptionCardProps> = Template.bind({})

Standard.args = {
    price: {
        currency: "€",
        value: 10
    },
    title: "Sottoscrizione",
    mostConvenient: false,
    typology: SubscriptionCardTypology.STANDARD,
    features: [
        {
            included: true,
            text: "Feature 1"
        },
        {
            included: true,
            text: "Feature 2"
        },
        {
            included: false,
            text: "Feature 3"
        }
    ]
} as ISubscriptionCardProps

StandardTwoMonths.args = {
    price: {
        currency: "€",
        value: 10
    },
    title: "Sottoscrizione",
    paymentFrequency: 2,
    mostConvenient: false,
    typology: SubscriptionCardTypology.STANDARD,
    features: [
        {
            included: true,
            text: "Feature 1"
        },
        {
            included: true,
            text: "Feature 2"
        },
        {
            included: false,
            text: "Feature 3"
        }
    ]
} as ISubscriptionCardProps

Package.args = {
    price: {
        currency: "€",
        value: 10
    },
    title: "Sottoscrizione",
    paymentFrequency: 2,
    mostConvenient: false,
    typology: SubscriptionCardTypology.PACKAGE,
    features: [
        {
            included: true,
            text: "Feature 1"
        },
        {
            included: true,
            text: "Feature 2"
        },
        {
            included: false,
            text: "Feature 3"
        }
    ]
} as ISubscriptionCardProps

Disabled.args = {
    disabled: true,
    price: {
        currency: "€",
        value: 10
    },
    title: "Sottoscrizione",
    paymentFrequency: 2,
    mostConvenient: false,
    typology: SubscriptionCardTypology.PACKAGE,
    features: [
        {
            included: true,
            text: "Feature 1"
        },
        {
            included: true,
            text: "Feature 2"
        },
        {
            included: false,
            text: "Feature 3"
        }
    ]
} as ISubscriptionCardProps

MostConvenient.args = {
    price: {
        currency: "€",
        value: 10
    },
    title: "Sottoscrizione",
    paymentFrequency: 2,
    mostConvenient: true,
    typology: SubscriptionCardTypology.STANDARD,
    features: [
        {
            included: true,
            text: "Feature 1"
        },
        {
            included: true,
            text: "Feature 2"
        },
        {
            included: false,
            text: "Feature 3"
        }
    ]
} as ISubscriptionCardProps

NoFeatures.args = {
    price: {
        currency: "€",
        value: 10
    },
    title: "Sottoscrizione",
    paymentFrequency: 2,
    typology: SubscriptionCardTypology.STANDARD
} as ISubscriptionCardProps

WithDescription.args = {
    price: {
        currency: "€",
        value: 10
    },
    title: "Sottoscrizione",
    description: "Descrizione Descrizione Descrizione Descrizione Descrizione",
    paymentFrequency: 2,
    typology: SubscriptionCardTypology.STANDARD
} as ISubscriptionCardProps
