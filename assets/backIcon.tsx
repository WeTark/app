import Svg, { G, Rect, Path, Defs } from "react-native-svg"

export const BackIcon = () => (
    <Svg
        width={38}
        height={38}
        fill="none"
    >
        <G>
        <Rect width={38} height={38} rx={12} fill="#000" fillOpacity={0.3} />
        </G>
        <Path
        d="M26.34 18.528h-14M19.34 25.528l-7-7 7-7"
        stroke="#F2F2F2"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <Defs></Defs>
    </Svg>
)