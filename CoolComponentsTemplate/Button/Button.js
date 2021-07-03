import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import './Button.scss'

export default function StandardButton({children, className, ...props}){

    return <Button className={classnames(className, 'standard-button')} {...props}>
        {children}
    </Button>


}