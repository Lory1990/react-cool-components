import classnames from "classnames"
import IElementClassesProps from "interfaces/IElementClassesProps"
import style from "./BubbleButtonCard.module.scss"

interface IBubbleButtonCardClassesProps {
    cardClass?: string
    cardImageClass?: string
    cardTitleClass?: string
    cardLinkClass?: string
  }

export interface IBubbleButtonCardProps extends IElementClassesProps<IBubbleButtonCardClassesProps> {
    image?: string
    cardTitle?: string
    textButton?: string
    link?: string
    className?: string
}

export const BubbleButtonCard: React.FC<IBubbleButtonCardProps> = ({
    elementClasses,
    image,
    cardTitle,
    textButton,
    link,
    className
}) => {

    return (
        <div className={classnames(style["card"], "card", className, elementClasses?.cardClass)}>
            <img src={image} alt="" className={classnames(style["card__image"], "card__image", elementClasses?.cardImageClass)} />
            <div className={classnames(style["card__body"], "card__body")}>
                <h3 className={classnames(style["card__title"], "card__title", elementClasses?.cardTitleClass)}> {cardTitle} </h3>
                <a href={link} className={classnames(style["btn"], style["card__btn"], "btn", "card__btn", elementClasses?.cardLinkClass)} >
                {textButton}
                </a>
            </div>
        </div>
    );
}

export default BubbleButtonCard