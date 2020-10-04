import React, { Component } from "react";
// import { formValid } from "../helpers/validators";

class Main extends Component {
  state = {
    value: ""
    // formErrors: {
    //   title: "",
    //   body: ""
    // }
  };

  changeValue = e => {
    const { value } = e.target;
    this.setState({ value: value });
    // if (formValid(this.state.formErrors)) {
    //   console.log(1);
    // } else {
    //   console.error("error");
    // }
  };

  handlerSubmit = ev => {
    ev.preventDefault();
    this.props.add(this.state.value, this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="main">
        <form className={"form"} onSubmit={e => this.handlerSubmit(e)}>
          <h2>ToDoList</h2>
          <div className={"form-control"}>
            <label className={"title"} htmlFor="form-control">
              Task title
            </label>
            <input
              value={value}
              type="text"
              name="title"
              className={"input-title input"}
              onChange={e => this.changeValue(e)}
            />
            <span>Error</span>
          </div>

          <div className={"form-control"}>
            <label className={"body"} htmlFor="form-control">
              Task body
            </label>
            <input
              value={value}
              type="text"
              name="body"
              className={"input-body input"}
              onChange={e => this.changeValue(e)}
            />
            <span>Error</span>
          </div>
          <button type="submit" className={"button"}>
            Add task
          </button>
        </form>
      </div>
    );
  }
}

export default Main;
