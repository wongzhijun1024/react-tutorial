import React from "react";
import { connect } from "react-redux";
import increaseAction from "../redux/actions/increase";
import sayHelloAction from "../redux/actions/hello";

class RootView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0,
      hello: props.hello || ""
    };
  }

  render() {
    const { count, hello, onIncreaseClick, onSayHello } = this.props;
    return (
      <div className="my-button">
        <button onClick={onIncreaseClick}>点击我</button>
        <button onClick={onSayHello}>Say Hello</button>
        <div>
          <div>Click Count: {count}</div>
          <div>Say: {hello}</div>
        </div>
      </div>
    );
  }
}
// Map Redux State to component props
const mapStateToProps = state => {
  return {
    count: state.counter.count,
    hello: state.counter.hello
  };
};
// Map Redux actions to component props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncreaseClick: () => {
      dispatch(increaseAction);
    },
    onSayHello: () => {
      dispatch(sayHelloAction);
    }
  };
};

// Connect component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootView);

export default App;
