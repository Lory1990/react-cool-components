import Button from "@buttons/Button"
import classnames from "classnames"
import { Popover, PopoverProps } from "@material-ui/core"
import style from "./YesNoPopover.module.scss"
import { ReactNode } from "react"
import { IStandardButtonProps } from "@buttons/Button/Button"

export interface IYesNoPopoverProps extends PopoverProps {
    showCancel?: boolean
    showTitle?: boolean
    onClose?: () => void
    onSuccess?: (event: any, payload: any) => void
    title?: string
    content?: ReactNode
    payload?: any
    closeLabel?: string
    okLabel?: string
    okButtonProps?: IStandardButtonProps
    cancelButtonProps?: IStandardButtonProps
}

export const YesNoPopover: React.FC<IYesNoPopoverProps> = ({
    showCancel = true,
    showTitle = true,
    open = false,
    onClose,
    onSuccess,
    title,
    content,
    payload,
    closeLabel,
    okLabel,
    anchorEl,
    className,
    anchorOrigin = { vertical: "bottom", horizontal: "right" },
    transformOrigin = { vertical: "top", horizontal: "right" },
    okButtonProps,
    cancelButtonProps,
    ...props
}) => {
    const onSuccessInternal = (event: any) => {
        onClose?.()
        onSuccess?.(event, payload)
    }

    return (
        <Popover
            anchorOrigin={anchorOrigin}
            className={classnames(style.yesNoPopover, className, "yes-no-popover")}
            classes={{
                root: classnames(style.root, props.classes?.root),
                paper: classnames(style.paper, props.classes?.paper)
            }}
            transformOrigin={transformOrigin}
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
        >
            {showTitle && <div className={classnames(style.title, "title")}>{title || "Sei sicuro?"}</div>}
            {content && <div className={classnames(style.content, "content")}>{content}</div>}
            <div className={classnames(style.actions, "actions")}>
                {showCancel && (
                    <Button className={classnames("cancel-button", style.cancelButton)} variant="outlined" color="primary" onClick={onClose} {...okButtonProps}>
                        {closeLabel || "Annulla"}
                    </Button>
                )}
                <Button className={classnames("ok-button", style.okButton)} color="primary" variant="contained" onClick={onSuccessInternal} {...cancelButtonProps}>
                    {okLabel || "Conferma"}
                </Button>
            </div>
        </Popover>
    )
}

export default YesNoPopover
