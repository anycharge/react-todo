import React, { Component } from "react";

class Main extends Component {

  render(){
    const { value, onChange, onClickAdd } = this.props;

    return (
      <>
        <input type="text" id="myInput" placeholder="할일.." value={ value } onChange={ onChange }/>
        <span className="addBtn" onClick={ onClickAdd( value ) }>추가</span>
      </>
    )
  }
}

export default Main;
