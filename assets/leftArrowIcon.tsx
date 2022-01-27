import Svg, { Path } from "react-native-svg"

export const LeftArrowIcon = () => {
    return(
        <Svg
            width={24}
            height={25}
            fill="none"
        >
            <Path
            d="M19.34 12.028h-14M12.34 19.028l-7-7 7-7"
            stroke="#F2F2F2"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </Svg>
    )
}