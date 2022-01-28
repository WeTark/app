import Slider from '@mui/material/Slider';

interface ISlider{
    min: number
    max: number
    value: number
    onChange: (e:any, value:number)=>void
    step?: number
}

export const SliderComponent = (props: ISlider) => {
    const { min, max, value, onChange, step } = props;
    return(
        <Slider
            min={min}
            max={max}
            step={step}
            value={typeof value === 'number' ? value : 0}
            onChange={onChange}
            aria-labelledby="input-slider"
        />
    )
}