import StandardDialog from "dialogs/StandardDialog";
import classNames from "classnames";
import style from './YesNoDialog.module.scss';
import { IStandardDialogProps } from "dialogs/StandardDialog/StandardDialog";

export interface IYesNoDialogProps extends IStandardDialogProps{
    okLabel?:string,
    closeLabel?:string,
    onClose?: () => void
    onSuccess?: (event: any, payload: any) => void, 
    payload?: any,
}

export function YesNoDialog(props : IYesNoDialogProps){

    const  { open, onClose, onSuccess, title, children, payload, closeLabel = "Annulla", okLabel = "Conferma", buttons = [], ...otherProps } = props

    const onSuccessInternal = (event : any) =>{
        onClose && onClose()
        onSuccess && onSuccess(event, payload)
    }

    return <StandardDialog
        open={open || false}
        title={title || "Sei sicuro?"}
        className={classNames("yes-no-dialog", style.yesNoDialog)}
        onClose={onClose}
        {...otherProps}
        buttons={[
            ...buttons,
            {
                variant:'outlined',
                color:'primary',
                onClick: onClose,
                children: closeLabel
            },
            {
                variant:'contained',
                color:'primary',
                type:'submit',
                onClick: onSuccessInternal,
                children: okLabel
            },
        ]}
    >
        {children}
        </StandardDialog>
}

export default YesNoDialog