
import dayjs from "dayjs";
import "element-ui/lib/theme-chalk/index.css";


type PropsType = {
    a: string;
    b: number;
}

export const ComponentC = (props: PropsType) => {
    return props.b === 1 ? "ComponentC" : dayjs()
}