import Button from '../../buttons/Button'
import './CircleButton.scss'

export default function CircleButton(props){


    let {children, ...rest} = props

    return <Button className='circle-button' {...rest}>
        {children}
    </Button>
}