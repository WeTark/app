
interface ISlider{
    min: number
    max: number
    value: number
    onChange: (e:any, value:number)=>void
    step?: number
}

export const SliderComponent = (props: ISlider) => {
    return(
        <></>
    )
}