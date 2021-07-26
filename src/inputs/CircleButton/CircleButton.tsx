import React from 'react'
import Button from '../Button/Button'
import style from './CircleButton.module.scss'


export interface ICircleButtonProps extends React.HTMLAttributes<HTMLDivElement>{
    
}
// @TODO capire  bene come integrare il bottone - non si può ad oggi fare di meglio
export const CircleButton : React.FC<ICircleButtonProps> = (props : ICircleButtonProps)  => {
    
    const {children, ...rest} = props


    return <Button className={style.CircleButton}>
        {children}
    </Button>
}

export default CircleButton