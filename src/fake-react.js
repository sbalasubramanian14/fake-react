import { h } from "snabbdom";

const createElement = (type, props = {}, ...children) => {
  console.log(type, props, children);

  if (type.prototype && type.prototype.isClassComponent) {
    const componentInstance = new type(props);
    componentInstance._virtualNode = componentInstance.render();
    componentInstance._virtualNode.data.hook = {
      create: () => {
        componentInstance.componentDidMount();
      }
    };

    return componentInstance._virtualNode;
  }

  if (typeof type == "function") {
    return type(props);
  }

  props = props || {};
  let dataProps = {};
  let eventProps = {};

  // This is to seperate out the text attributes and event listener attributes
  for (let propKey in props) {
    // event props always startwith on eg. onClick, onDblClick etc.
    if (propKey.startsWith("on")) {
      // onClick -> click
      const event = propKey.substring(2).toLowerCase();

      eventProps[event] = props[propKey];
    } else {
      dataProps[propKey] = propKey[propKey];
    }
  }
  return h(type, { props: dataProps, on: eventProps }, children);
};

//Class component
class Component {
  constructor() {}

  componentDidMount() {}

  setState(partialState) {
    this.state = {
      ...this.state,
      ...partialState
    };
    FakeReact._updater(this);
  }

  render() {}
}

// to differentiate class and functional component
Component.prototype.isClassComponent = true;

const FakeReact = {
  createElement,
  Component
};

export default FakeReact;
