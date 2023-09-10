import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);

    this.state = {
      count: 0,
      count1: 1,
      products: {},
    };
  }

  componentDidMount() {
    console.log("child component mounted");

    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json }));

    this.timer = setInterval(() => {
      console.log("run interval");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("component updated");
    }

    if (this.state.count1 !== prevState.count1) {
      console.log("component updated again");
    }
  }

  componentWillUnmount() {
    console.log("child Component unmounted");
    clearInterval(this.timer);
  }

  render() {
    console.log("child class component render called");
    const { name, color } = this.props;
    return (
      <>
        <h1>Profile Class Based Component</h1>
        <h2>{name}</h2>
        <h2>{color}</h2>
        <h2>Count: {this.state.count}</h2>
        <h2>Count1: {this.state.count1}</h2>
        <button onClick={() => this.setState({ count: 1, count1: 2 })}>
          Update Count
        </button>

        <h1>Products</h1>
        <h2>{this.state.products.title}</h2>
        <img src={this.state.products.thumbnail} alt=""></img>
      </>
    );
  }
}

export default ProfileClass;
