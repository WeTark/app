import Svg, { Path, Rect } from "react-native-svg"

export const HowtotradeIcon = () => {
    return(
      <Svg
      width={24}
      height={24}
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.74 2.788c0-.335.272-.606.606-.606h1.204c.335 0 .606.271.606.606v1.6a.606.606 0 0 1-.606.607h-1.204a.606.606 0 0 1-.606-.606V2.788Z"
        fill="#434343"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.14 5.14c0-.423-.405-.766-.903-.766H2.856c-.5 0-.903.343-.903.767v1.668h1.22v10.204h5.62l-2.909 3.47c-.204.206-.128.616.173.916l.545.544 4.217-4.78v4.898h2.347v-5.028l4.334 4.909.544-.544c.3-.3.378-.71.172-.916l-2.998-3.47h5.586V6.808h1.338V5.14h-.002Zm-2.487 10.757H4.349V6.81h15.304v9.088Z"
        fill="#434343"
      />
      <Rect
        x={6.484}
        y={9.091}
        width={11.273}
        height={1.333}
        rx={0.606}
        fill="#434343"
      />
      <Rect
        x={6.484}
        y={12}
        width={11.273}
        height={1.333}
        rx={0.606}
        fill="#434343"
      />
    </Svg>
    )
}