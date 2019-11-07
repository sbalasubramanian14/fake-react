import FakeReact from "./fake-react";
import FakeReactDom from "./fake-react-dom";

import MyList from "./my-list-class-component";

import "./styles/main.scss";

const Force = ({ name }) => {
  return (
    <span className={"header"}>
      {`May the force be with you!, ${name} `}
      <sup>I'm a functional component</sup>
    </span>
  );
};

const App = (
  <div>
    <h1 className="primary">My own React</h1>
    <Force name="Bala" />
    <hr className="small-width" />
    <span className="movie-header">Good to watch, these movies are</span>
    <MyList />
  </div>
);

FakeReactDom.render(App, document.getElementById("everything-goes-here"));
