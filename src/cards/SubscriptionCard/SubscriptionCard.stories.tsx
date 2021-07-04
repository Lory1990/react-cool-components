import { Meta } from '@storybook/react';
import SubscriptionCard, { ISubscriptionCardProps } from './SubscriptionCard'

export default {
    title: 'Cards/SubscriptionCard',
    component: SubscriptionCard,
} as Meta;
  
export const Plain = (args: ISubscriptionCardProps) => {
  return <SubscriptionCard {...args}/>;
}

Plain.args = {
    price: {
      currency: "€",
      value: 10
    },
    title: "Sottoscrizione",
    features: [
      {
        included: false,
        text: "Feature 1",
      },
      {
        included: true,
        text: "Feature 2",
      }
    ]
} as ISubscriptionCardProps;