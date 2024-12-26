
import { ComponentA } from "PackageA"
import dayjs from "dayjs"

type PropsType = {
    a: string;
    b: number;
}

export const ComponentB = (props: PropsType) => {
    return props.b === 1 ? ComponentA({a:"test",b:props.b}) : dayjs()
}