import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const AntdSvg = () => (
    <svg 
       className="icon" 
       viewBox="0 0 1024 1024" 
       version="1.1" 
       xmlns="http://www.w3.org/2000/svg" 
       p-id="14200" 
       style={{
         width: "1em",
         height: "1em",
         fill: "currentcolor",
         overflow: "hidden",
       }}
       ><path d="M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9 0.1 0.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5 0.5L80.9 474.2c-21.2 21.1-21.2 55.3 0 76.4L474.6 944c21.2 21.1 55.4 21.1 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6-19-18.9-49.7-18.9-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c0.4-0.4 0.9-0.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0 106.3 106.2 0 1 0-212.6 0z m536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7 0.1-19 18.9-19 49.7 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7c-19 18.9-19 49.7 0 68.6 19 18.9 49.7 18.9 68.7 0l121.8-121.7c21.1-21.1 21.1-55.2-0.1-76.4z" fill="#1296DB" p-id="14201"></path></svg>
)

export const AntdIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={AntdSvg} {...props} />
  );