import FakeReact from "./fake-react";
import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";

let virtualRootNode;
const reconcile = snabbdom.init([propsModule]);

const render = (el, rootDomElement) => {
  if (!virtualRootNode) {
    virtualRootNode = rootDomElement;
  }
  virtualRootNode = reconcile(virtualRootNode, el);
};

const FakeReactDom = {
  render
};

export default FakeReactDom;
