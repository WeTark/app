import Lottie from "lottie-react";

interface ILottieAnimationProps{
    animationData: any
}

export const LottieAnimation = (props: ILottieAnimationProps) => {
    const { animationData } = props;

    return(
        <Lottie style={{width:'60%'}} animationData={animationData} loop/>
    )
}