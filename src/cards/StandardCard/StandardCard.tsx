import React from 'react'
import { IStandardCard } from './interfaces/IStandardCard'
import classnames from "classnames"
import style from './StandardCard.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'


export const StandardCard: React.FC<IStandardCard> = (props: IStandardCard) => {

	const [cardHover, setCardHover] = React.useState<boolean>(false);

	const setCardStateHover = (): void => {
		let result
		result = cardHover === false ? true : false;
		setCardHover(result);
	}

	let cardImgAnimation = cardHover === false ? null : style["card__img-animation"];

	const classes = useStyles();

	return (
		<Card
			className={classNames(classes.root, style["card"])}
			onMouseOut={() => setCardStateHover()}
			onMouseOver={() => setCardStateHover()}
		>
			<figure>
				<div className={classNames(style["card__img-wrapper"], style["card__img-wrapper"])}>
					<img
						className={classNames(style["card__img"], `${cardImgAnimation}`)}
						src={props.imageData.imageUrl}
						alt={props.imageData.title}
					/> {/* END CARD IMG */}
				</div>
			</figure> {/* END CARD IMG BLOCK */}
			<CardContent className={style["card__info"]}>
				<h2 className={classNames(style["card__info-title"])}>
					<a href={props.link} >
						{props.title}
					</a>
				</h2> {/* END CARD TITLE */}
				<Typography
					style={{ marginTop: 5 }}
					className={classNames(style["card__info-excerpt"])}
					color="textSecondary"
					component="p"
					variant="body2"
				>
					{props.copy}
				</Typography> {/* END CARD EXCERPT */}
			</CardContent> {/* END CARD CONTENT */}
		</Card> /* END CARD */
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: 350,
		borderRadius: 0,
		boxShadow: "0 2px 5px 0 rgb(0 0 0 / 4%), 0 2px 10px 0 rgb(0 0 0 / 6%)",
	}
}));

export default StandardCard 