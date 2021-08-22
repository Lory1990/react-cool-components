import { CircularProgress, CircularProgressProps } from "@material-ui/core"
import classnames from 'classnames'
import style from './RoundLoader.module.scss'

export default function RoundLoader(props : CircularProgressProps) {

    const { className, ...realProps} = props
    return (
        <CircularProgress className={classnames('circular-progress', style.circularProgess, className)} {...realProps} />
    )
}
