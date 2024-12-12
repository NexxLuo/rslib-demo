
import { ComponentA } from "PackageA"

type PropsType = {
    a: string;
    b: number;
}

export const ComponentB = (props: PropsType) => {
    return props.b === 1 ? ComponentA({a:"test",b:props.b}) : "component-b"
}