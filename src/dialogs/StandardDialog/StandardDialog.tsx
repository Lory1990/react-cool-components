import Button, { IStandardButtonProps } from "@buttons/Button/Button";
import { Dialog, DialogActions, DialogContent, DialogProps, DialogTitle } from "@material-ui/core";
import classnames from 'classnames'
import _ from "lodash";
import style from './StandardDialog.module.scss';

export interface IStandardDialogProps extends DialogProps{
    buttons?: IStandardButtonProps[]
}

export function StandardDialog(props : IStandardDialogProps){

    const  { buttons, children, title, ...otherProps } = props

    return <Dialog
        {...otherProps}
    >
            {title && <DialogTitle className={classnames("title", style.title)}>{title}</DialogTitle>}
            {children &&<DialogContent className={classnames("content", style.content)}>
                    {children}
            </DialogContent>}
            {buttons &&
                <DialogActions className={classnames("actions", style.actions)}>
                    {buttons.map((buttonProp, index)=>{
                        return <Button {...buttonProp} key={index}/>
                    })}
                </DialogActions>
            }
    </Dialog>

}

export default StandardDialog