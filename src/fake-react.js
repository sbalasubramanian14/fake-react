import { h } from "snabbdom";

const createElement = (type, props = {}, ...children) => {
  console.log(type, props, children);

  if (typeof type == "function") {
    return type(props);
  }

  return h(type, { props }, children);
};

const FakeReact = {
  createElement
};

export default FakeReact;
