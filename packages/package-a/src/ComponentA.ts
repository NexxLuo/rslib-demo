
type PropsType = {
    a: string;
    b: number;
}

export const ComponentA = (props: PropsType) => {
    return props.b === 1 ? "ComponentA" : "component-a"
}