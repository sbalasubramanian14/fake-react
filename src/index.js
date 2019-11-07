import FakeReact from "./fake-react";
import FakeReactDom from "./fake-react-dom";

import MyList from "./my-list-class-component";

import "./styles/main.scss";

const Force = ({ name }) => {
  return <h5>{`May the force be with you!, ${name}`}</h5>;
};

const App = (
  <div>
    <h1 className="primary">My own React</h1>
    Go and see these movies to survive!! <Force name="Ren" />
    <hr />
    <MyList />
  </div>
);

FakeReactDom.render(App, document.getElementById("everything-goes-here"));
