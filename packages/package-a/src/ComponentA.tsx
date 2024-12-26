import { defineComponent } from "vue";
import dayjs from "dayjs"

type PropsType = {
  a: string;
  b: number;
};

export const ComponentA = defineComponent({
  render(h) {
    let props: any = this.$props;
    return props.b === 1 ? <div>{dayjs()}</div> : <div>34</div>;
  },
});
