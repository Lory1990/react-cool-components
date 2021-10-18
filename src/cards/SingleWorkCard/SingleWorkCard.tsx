import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ISingleWorkCard from './interfaces/ISingleWorkCard';
import style from './SingleWorkCard.module.scss'
import classNames from 'classnames'

export const SingleWorkCard : React.FC<ISingleWorkCard> = (props: ISingleWorkCard) => {

	const [cardHover, setCardHover] = React.useState<boolean>(false);

	const setCardStateHover = () : void => {
		let result
		result = cardHover === false ? true : false;
		setCardHover(result);
	}

	let cardImgAnimation = cardHover === false ? null : style["card__img-animation"];
	let cardImgOverlayOn = cardHover === false ? null : style["card__img-overlay--on"];

	const classes = useStyles();

	return (
		<Card 
			className={classNames(classes.root, style.card, "card")}
			key={props.keyMap} 
			onMouseOut={()=> setCardStateHover()}
			onMouseOver={() => setCardStateHover()}
		>
			<figure>
				<div className={classNames(style["card__img-wrapper"], "card__img-wrapper")}>
					<img 
						className={classNames(style["card__img"], "card__img",`${cardImgAnimation}`)} 
						src={props.imageData.imageUrl} 
						alt={props.imageData.title} 
					/> {/* END CARD IMG */}
					<div className={classNames(style["card__img-overlay"], `${cardImgOverlayOn}`)}>
						<div className={classNames(style["card__img-overlay-button"])}>
							<a 
								className={classNames(style["card__img-overlay-button-link"])} 
								href={props.buttonLink}
							>
								{props.buttonText}
							</a>
						</div>
					</div> {/* END CARD IMG OVERLAY */}
				</div>
			</figure> {/* END CARD IMG BLOCK */}
      			<CardContent className={style["card__info"]}>
				<h2 className={style["card__info-title"]}>
					<a href={props.link} >
						{ props.title }
					</a>
				</h2> {/* END CARD TITLE */}
        			<Typography
					style={{marginTop : 5}}  
					className={classNames(style["card__info-excerpt"])}
					color="textSecondary" 
					component="p" 
					variant="body2"
				>
					{ props.copy }
        			</Typography> {/* END CARD EXCERPT */}
      			</CardContent> {/* END CARD CONTENT */}
    		</Card> /* END CARD */
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
	  width: 350,
	  borderRadius : 0,
	  boxShadow : "0 2px 5px 0 rgb(0 0 0 / 4%), 0 2px 10px 0 rgb(0 0 0 / 6%)",
	}
      }));

export default SingleWorkCard
