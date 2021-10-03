import classnames from "classnames"
import style from "./TwoElementsGallery.module.scss"

export interface ITwoElementsGalleryProps {
    imageLeft?: string
    imageLeftAlt?: string
    imageRight?: string
    imageRightAlt?: string
    className?: string
    classes?: {
        image?: string
        leftImage?: string
        rightImage?: string
    }
}

export const TwoElementsGallery = ({ imageLeft, imageRight, imageLeftAlt = "", imageRightAlt = "", className, classes }: ITwoElementsGalleryProps) => {
    return (
        <div className={classnames(style["two-elements-gallery-container"], "two-elements-gallery-container", className)}>
            <img
                src={imageLeft}
                alt={imageLeftAlt}
                className={classnames(
                    classes?.image,
                    classes?.leftImage,
                    style["two-elements-gallery__image"],
                    style["two-elements-gallery__image-left"],
                    "two-elements-gallery__image",
                    "two-elements-gallery__image-left"
                )}
            />
            <img
                src={imageRight}
                alt={imageRightAlt}
                className={classnames(
                    classes?.image,
                    classes?.rightImage,
                    style["two-elements-gallery__image"],
                    style["two-elements-gallery__image-right"],
                    "two-elements-gallery__image",
                    "two-elements-gallery__image-right"
                )}
            />
        </div>
    )
}

export default TwoElementsGallery
