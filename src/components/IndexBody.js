import React from "react";

import ComponentBodyChild from "./bodychild";

export default class ComponentIndexBody extends React.Component {
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  constructor() {
    super();
    // state对象为模块自身的属性，props对象的属性值由使用它的组件（父级组件）进行赋值传递
    this.state = {
      uname: "jx"
    };
  }

  changeSta() {
    this.setState({ uname: "jinx" });
  }

  render() {
    // setTimeout(() => {
    //   this.setState({ uname: this.props.username, age: 99 }); // this.props.username接收了 app组件(父级组件)传入的参数username
    // }, 4000);
    var userName = "jx111";
    var boolInput = false;
    var htmltext = "hasf  asff";
    return (
      <div>
        <h1>body</h1>
        <p>{userName === "" ? "please login in" : "username: " + userName}</p>
        <p>
          <input
            type="button"
            value="submit"
            disabled={boolInput}
            onClick={this.changeSta.bind(this)}
          />
        </p>
        <h1>{htmltext}</h1>
        <h1>
          {this.state.uname}-{this.state.age}-{this.props.username}
        </h1>

        <ComponentBodyChild />
      </div>
    );
  }
}
