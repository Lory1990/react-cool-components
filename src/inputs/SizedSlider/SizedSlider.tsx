import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import classnames from "classnames"
 import style from "./SizedSlider.module.scss"


export interface ISizedSliderProps{
    size?:string
    defaultValue?: {}
    valueLabelDisplay?: string
}


export const SizedSlider: React.FC<ISizedSliderProps> = (props: ISizedSliderProps) => {


return  (<Box width={300}>
<Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
</Box>)
  


}

export default SizedSlider