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

export const TwoElementsGallery: React.FC<ITwoElementsGalleryProps> = ({ imageLeft, imageRight, imageLeftAlt = "", imageRightAlt = "", className, classes }) => {
    const noImages = !imageLeft && !imageRight

    return (
        <div
            className={classnames(style["two-elements-gallery-container"], "two-elements-gallery-container", className, {
                [style["two-elements-gallery__no-images"]]: noImages,
                "two-elements-gallery__no-images": noImages
            })}
        >
            {imageLeft && (
                <img
                    src={imageLeft}
                    alt={imageLeftAlt}
                    className={classnames(
                        classes?.image,
                        classes?.leftImage,
                        style["two-elements-gallery__image"],
                        style["two-elements-gallery__image-left"],
                        "two-elements-gallery__image",
                        "two-elements-gallery__image-left",
                        { [style["two-elements-gallery__only-left"]]: !imageRight && !noImages }
                    )}
                />
            )}
            {imageRight && (
                <img
                    src={imageRight}
                    alt={imageRightAlt}
                    className={classnames(
                        classes?.image,
                        classes?.rightImage,
                        style["two-elements-gallery__image"],
                        style["two-elements-gallery__image-right"],
                        "two-elements-gallery__image",
                        "two-elements-gallery__image-right",
                        { [style["two-elements-gallery__only-right"]]: !imageLeft && !noImages }
                    )}
                />
            )}
        </div>
    )
}

export default TwoElementsGallery
