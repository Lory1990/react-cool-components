import classnames from 'classnames'
import style from "./TwoElementsGallery.module.scss"


export type TwoElementsGalleryProps = {
    imageLeft: string,
    imageRight: string
}

export const TwoElementsGallery = ({imageLeft, imageRight} : TwoElementsGalleryProps) => {
    return (
      <div className={classnames("two-elements-gallery-container")}>
        <img
          src={imageLeft}
          alt=""
          className={classnames("two-elements-gallery__image", "two-elements-gallery__image-left")}
        />
        <img
          src={imageRight}
          alt=""
          className={classnames("two-elements-gallery__image", "two-elements-gallery__image-right")}
        />
      </div>
    );
  };

  export default TwoElementsGallery