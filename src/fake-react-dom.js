import FakeReact from "./fake-react";
import * as snabbdom from "snabbdom";
import propsModule from "snabbdom/modules/props";
import eventlistenersModule from "snabbdom/modules/eventlisteners";

let virtualRootNode;
const reconcile = snabbdom.init([propsModule, eventlistenersModule]);

const render = (el, rootDomElement) => {
  if (!virtualRootNode) {
    virtualRootNode = rootDomElement;
  }
  virtualRootNode = reconcile(virtualRootNode, el);
};

// Telling React how to update DOM
FakeReact._updater = componentInstance => {
  // update the DOM on call to this.setState
  console.log(componentInstance);

  const oldVirtualNode = componentInstance._virtualNode;
  const newVirtualNode = componentInstance.render();

  componentInstance._virtualNode = reconcile(oldVirtualNode, newVirtualNode);
};

const FakeReactDom = {
  render
};

export default FakeReactDom;
