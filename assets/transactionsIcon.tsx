import Svg, { G, Path } from "react-native-svg"

export const TransactionsIcon = () => {
    return(
        <Svg
            width={18}
            height={18}
            fill="none"
          >
            <G opacity={0.7} stroke="#434343" strokeWidth={1.632}>
              <Path d="M15.5 12.657H2.71m2.843-4-3.553 4 3.553 4M2.5 5.343h12.79m-2.842 4 3.552-4-3.553-4" />
            </G>
          </Svg>
    )
}