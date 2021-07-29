import classnames from 'classnames'
import Button, { ButtonProps }  from '@material-ui/core/Button'
import style from './Button.module.scss'
import IFormProps from 'interfaces/IFormProps'

export interface IStandardButtonProps extends ButtonProps, IFormProps{
}

export const StandardButton : React.FC<IStandardButtonProps> = ({children, className,...props} : IStandardButtonProps) => {

    return <Button className={classnames(className,style.standardButton,  'standard-button')} {...props}>
        {children}
    </Button>


}


export default StandardButton