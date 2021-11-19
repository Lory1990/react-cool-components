import React from 'react'
import classnames from "classnames"
import style from './StandardCard.module.scss'

type TStandardCard = {

}

export interface IStandardCard {

}

export const StandardCard: React.FC<IStandardCard> = (props: IStandardCard) => {

	return (
		<div>
			<h1 className={classnames(style.color)}>Hello, I'm Standard Card</h1>
		</div>
	)
}

export default StandardCard 