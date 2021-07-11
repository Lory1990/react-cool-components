import { useMemo } from "react";
import classnames from "classnames";
import style from "./SubscriptionCard.module.scss";
import { ReactComponent as FeatureYes } from 'assets/img/feature-yes.svg'
import { ReactComponent as FeatureNo } from 'assets/img/feature-no.svg'
import { Button } from "@material-ui/core";

export enum SubscriptionCardTypology {
  STANDARD = "STANDARD",
  PACKAGE = "PACKAGE",
}

export interface ISubscriptionCardFeature {
    included: boolean
    text: string
}

export interface ISubscriptionCardProps {
  htmlId?: string,
  id?: string,
  mostConvenient?: boolean,
  className?: string,
  typology?: SubscriptionCardTypology,
  paymentFrequency?: number,
  title: string,
  description?: string,
  onBuyNowClick?: (id: string) => void,
  features?: ISubscriptionCardFeature[],
  labels?: {
    features?: string
    mostConvenient?: string,
    toMonth?: string
    toMonths?: string,
    buyNow?: string,
  },
  price: {
    value: number,
    currency: string
  }
}

export function SingleSubscriptionCard(props: ISubscriptionCardProps) {

  const { htmlId, description, features, labels, price, mostConvenient, className, title, typology, paymentFrequency, id, onBuyNowClick } = props

  const realLabels = useMemo(() => {
    return {
      features: "Caratteristiche",
      mostConvenient: "Più conveniente",
      toMonth: "/mese",
      toMonths: "/{{number}} mesi",
      buyNow: "Acquista",
      ...labels
    }
  }, [labels])

  const priceString = useMemo<string>(() => {
    try {
      if (Number.isInteger(price.value)) return price.value + ""
      return price.value.toFixed(2)
    } catch (e) {
      console.error(e)
      return price.value + ""
    }
  }, [price])

  return (
    <div className={classnames("subscription-card", className, style.subscriptionCard, { [style.mostConvenient]: mostConvenient })} id={htmlId}>
      {mostConvenient && <span className={style.badge}>{realLabels.mostConvenient}</span>}
        <h2 className={classnames(style.title, "title")}>{title}</h2>
        {description &&
          <div className={classnames(style.description, "description")}>{description}</div>
        }
        <div className={classnames(style.price, "price")}>
          <span className={classnames(style.priceValue, "price-value")}>{price.currency} {priceString}</span>
          <span className={classnames(style.paymentFrequency, "payment-frequency")}>
            {typology === "STANDARD"
              ? paymentFrequency === 1
                ? realLabels.toMonth
                : realLabels.toMonths.replace("{{number}}", paymentFrequency + "")
              : ""}
          </span>
      </div>
      {onBuyNowClick &&
          <Button
            className={classnames(style.productPrice, "product-price")}
            onClick={(e) => onBuyNowClick(id || "")}
          >
            {realLabels.buyNow}
          </Button>
        }
        <div className={classnames(style.titleFeatures, "title-features")}>{realLabels.features}:</div>
        <ul className={classnames(style.listFeatures, "list-features")}>
          {Array.isArray(features) && features.map((feature, index: number) =>
            <li key={index} className={classnames(style.singleFeature, "single-feature")}> {feature.included ? <FeatureYes /> : <FeatureNo />} <span className={classnames('feature-text', style.featureText)}>{feature.text}</span></li>
          )}
        </ul>
    </div>
  );
}

export default SingleSubscriptionCard