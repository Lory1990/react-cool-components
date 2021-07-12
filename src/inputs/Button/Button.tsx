import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import './Button.scss'


export interface IStandardButton{
    children:ReactNode,
    className: ReactNode
}
export default function StandardButton({children: any, className: any, ...props}){

    return <Button className={classnames(className, 'standard-button')} {...props}>
        {children}
    </Button>


}