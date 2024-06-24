import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const WebpackSvg = () => (
    <svg  
       className="icon" 
       viewBox="0 0 1024 1024" 
       version="1.1" 
       xmlns="http://www.w3.org/2000/svg" 
       p-id="32427"
       style={{
         width: "1em",
         height: "1em",
         fill: "currentcolor",
         overflow: "hidden",
       }}
       ><path d="M882.23288889 749.45422222L526.90488889 950.38577778V793.94133333l221.41155556-121.856 133.91644444 77.36888889z m24.34844444-22.07288889V307.08622222l-129.93422222 75.09333333v270.22222223l129.93422222 74.97955555z m-766.17955555 22.07288889l355.328 201.04533333V793.94133333L274.20444445 672.08533333l-133.80266667 77.36888889zM116.05333333 727.38133333V307.08622222l129.93422222 75.09333333v270.22222223L116.05333333 727.38133333z m15.24622222-447.60177778l364.43022223-206.16533333v151.32444445L262.144 353.39377778l-1.82044445 1.024c0 0.11377778-129.024-74.63822222-129.024-74.63822223z m760.03555556 0L526.90488889 73.728v151.32444445l233.472 128.34133333 1.82044444 1.024 129.13777778-74.63822223z" fill="#8ED6FB" p-id="32428"></path><path d="M495.72977778 758.21511111l-218.45333333-120.14933333V400.15644445l218.45333333 126.17955555v231.87911111z m31.17511111 0l218.45333333-120.03555556V400.15644445l-218.45333333 126.17955555v231.87911111zM291.95377778 372.62222222l219.24977777-120.49066667L730.45333333 372.62222222 511.31733333 499.25688889 291.95377778 372.62222222z" fill="#1C78C0" p-id="32429"></path></svg>
)
export const WebpackIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={WebpackSvg} {...props} />
  );