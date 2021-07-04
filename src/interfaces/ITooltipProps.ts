import { ReactNode } from "react";

export interface ITooltipData{
    /**
     * Tooltip title, can be a string or react node
     */
    title?: string | ReactNode,
    /**
     * Tooltip type
     */
    type?: "INFO" | "WARNING" | "ERROR" | "SUCCESS",
}

export default interface ITooltipProps{
    /**
     * Tooltip data for the field
     */
    tooltip?: ITooltipData
}