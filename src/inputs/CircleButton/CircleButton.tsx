import Button from '../Button/Button'
import './CircleButton.scss'


export interface ICircleButtonProps {
    children: any
    
}
export default function CircleButton(props: { [x: string]: any; children: any }){


    let {children, ...rest} = props

    return <Button className='circle-button' {...rest}>
        {children}
    </Button>
}