export interface ITooltipData{
    title?: string,
    type?: "INFO" | "WARNING" | "ERROR" | "SUCCESS",
}

export default interface ITooltipProps{
    tooltip : ITooltipData
}