import React from 'react'
import Button from '../Button/Button'
import './CircleButton.scss'


export interface ICircleButtonProps extends React.HTMLAttributes<HTMLDivElement>{
    
}
// @TODO capire  bene come integrare il bottone - non si può ad oggi fare di meglio
export const CircleButton : React.FC<ICircleButtonProps> = (props : ICircleButtonProps)  => {
    
    const {children, ...rest} = props


    return <Button className='circle-button'>
        {children}
    </Button>
}

export default CircleButton