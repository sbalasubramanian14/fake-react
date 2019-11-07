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
    const movieList = this.state.myList.map((value, index) => (
      <span key={index}>{value}</span>
    ));
    console.log(movieList);
    return (
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
        <div>{movieList.forEach(element => element)}</div>
        <small>
          Movie count: <bold>{this.state.count}</bold>
        </small>
      </div>
    );
  }
}
