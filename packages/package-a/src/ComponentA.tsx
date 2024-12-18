import { defineComponent } from "vue";

type PropsType = {
  a: string;
  b: number;
};

export const ComponentA = defineComponent({
  render(h) {
    let props: any = this.$props;
    return props.b === 1 ? <div>12</div> : <div>34</div>;
  },
});
