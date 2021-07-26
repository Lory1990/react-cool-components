import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import style from './Button.module.scss'
import { MouseEventHandler } from 'react'

export interface IStandardButtonProps{
    children: any,
    className?: string,
    onClick?: MouseEventHandler<any>,
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'default',
}

export const StandardButton : React.FC<IStandardButtonProps> = ({children, className, onClick, variant, color,...props} : IStandardButtonProps) => {

    return <Button className={classnames(className,style.standardButton,  'standard-button')} variant={variant} color={color} onClick={onClick} {...props}>
        {children}
    </Button>


}


export default StandardButton