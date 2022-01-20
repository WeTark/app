import Svg, { G, Rect, Path, Defs } from "react-native-svg"

export const ShareIcon = () => (
    <Svg
        width={38}
        height={38}
        fill="none"
    >
        <G>
        <Rect width={38} height={38} rx={12} fill="#000" fillOpacity={0.3} />
        </G>
        <Path
        d="M25 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 20.5l6 3M13 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM22 14.5l-6 3M25 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <Defs></Defs>
    </Svg>
)