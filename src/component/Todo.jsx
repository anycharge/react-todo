import React, { Component } from "react";

class Todo extends Component {

  render(){
    const { children } = this.props;

    return (
      <>
        <div id="myDIV" className="header">
          <h2>To Do List</h2>
          { children && children[ 0 ] && children[ 0 ] }
        </div>
        <div><h3>{ this.title }</h3></div>
        { children && children[ 0 ] && children[ 1 ] }
      </>
    )
  }
}

export default Todo;
