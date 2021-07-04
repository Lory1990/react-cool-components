import React, { useMemo } from "react";
import classnames from "classnames";
import style from "./SubscriptionCard.module.scss";
import {ReactComponent as FeatureYes } from '@assets/img/feature-yes.svg'
import {ReactComponent as FeatureNo } from '@assets/img/feature-no.svg'
import { Button } from "@material-ui/core";

export interface ISubscriptionCardProps{
    id?:string,
    mostConvenient?: boolean,
    className?: string,
    typology?: "STANDARD" | "PACKAGE",
    paymentFrequency?: number,
    title: string,
    description?: string,
    onBuyNowClick?: (id: string) => void,
    features?: [{
        included: boolean 
        text: string
    }],
    labels?:{
        features? : string
        mostConvenient?: string,
    },
    price: {
        value: number,
        currency: string
    }
}

export function SingleSubscriptionCard(props : ISubscriptionCardProps) {
  
    const {description, features, labels, price, mostConvenient, className, title, typology, paymentFrequency, id, onBuyNowClick } = props

    const realLabels = {
        mostConvenient: "Più conveniente",
        ...labels
    }

  let priceString = useMemo<string>(()=>{
    try{
      if( Number.isInteger(price.value) ) return price.value + ""
      return price.value.toFixed(2)
    }catch(e){
      console.error(e)
      return price.value + ""
    }
  },[price])
  
  return (
    <div className={classnames("subscription-card", className, style.subscriptionCard, {[style.mostConvenient]: mostConvenient})}>
      {mostConvenient && <span className={style.badge}>{realLabels.mostConvenient}</span>}
        <div className={classnames(style.cardHead, "card-head")}>            
              <h2 className={classnames(style.title, "title")}>{title}</h2>
              {description && 
                <div className={classnames(style.description, "description")}>{description}</div>
              }
              <div className={classnames(style.price, "price")}>
                  <span className={classnames(style.priceValue, "price-value")}>{price.currency} {priceString}</span>
                  <span className={classnames(style.paymentFrequency, "payment-frequency")}>
                  {typology === "STANDARD"
                    ? paymentFrequency === 1
                      ? "signup-to-month"
                      : "signup-months"
                    : ""}
                    </span>                
            </div>
                {onBuyNowClick && 
                    <Button
                        className={classnames(style.productPrice, "product-price")}
                        onClick={(e) => onBuyNowClick(id || "")}
                    >
                    {"Acquista"}
                    </Button>
                }
          </div>
          <div className={classnames(style.cardBody, "card-body")}>       
          <div className={classnames(style.titleFeatures, "title-features")}>{labels?.features || 'Features'}:</div>
            <ul className={classnames(style.listFeatures, "list-features")}>
                {Array.isArray(features) && features.map((feature, index : number) => 
                    <div key={index} className={classnames(style.singleFeature, "single-feature")}> {feature.included ? <FeatureYes /> : <FeatureNo />} <li>{feature.text}</li></div>
                )}  
            </ul>
          </div>
    </div>
  );
}

export default SingleSubscriptionCard