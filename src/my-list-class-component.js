import FakeReact from "./fake-react";

export default class MyList extends FakeReact.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: "",
      myList: [],
      count: 0
    };
  }

  componentDidMount() {
    console.log("Class component Ready to go!");
  }

  render() {
    return (
      <div>
        <div id="movie-list">
          <input
            type="text"
            value={this.state.currentMovie}
            placeholder="Type Movies here! Now!"
            onChange={e => {
              this.setState({ currentMovie: e.target.value });
            }}
          />
          <button
            onClick={() => {
              this.setState({
                myList: [...this.state.myList, this.state.currentMovie],
                count: this.state.count + 1
              });
            }}
          >
            Add
          </button>
        </div>
        <div className="list">{this.state.myList.join(",")}</div>
        <small className="count">
          Movie count: <bold>{this.state.count}</bold>
        </small>
      </div>
    );
  }
}
