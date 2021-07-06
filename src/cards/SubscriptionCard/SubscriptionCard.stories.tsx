import { Meta } from '@storybook/react';
import SubscriptionCard, { ISubscriptionCardProps, SubscriptionCardTypology } from './SubscriptionCard'

export default {
    title: 'Cards/SubscriptionCard',
    component: SubscriptionCard,
} as Meta;
  
export const Standard = (args: ISubscriptionCardProps) => {
  return <SubscriptionCard {...args}/>;
}

Standard.args = {
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
        text: "Feature 1",
      },
      {
        included: true,
        text: "Feature 2",
      },
      {
        included: false,
        text: "Feature 3",
      }
    ]
} as ISubscriptionCardProps;

export const Package = (args: ISubscriptionCardProps) => {
  return <SubscriptionCard {...args}/>;
}

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
        text: "Feature 1",
      },
      {
        included: true,
        text: "Feature 2",
      },
      {
        included: false,
        text: "Feature 3",
      }
    ]
} as ISubscriptionCardProps;

export const MostConvenient = (args: ISubscriptionCardProps) => {
  return <SubscriptionCard {...args}/>;
}

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
        text: "Feature 1",
      },
      {
        included: true,
        text: "Feature 2",
      },
      {
        included: false,
        text: "Feature 3",
      }
    ]
} as ISubscriptionCardProps;