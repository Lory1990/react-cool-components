import { Tooltip } from "@material-ui/core"
import { ReactComponent as BadgeIcon } from "./assets/img/badge-icon.svg"

export default function IconTooltip(props) {
    const { tooltip } = props

    return (
        <Tooltip title={tooltip}>
            <BadgeIcon />
        </Tooltip>
    )
}
