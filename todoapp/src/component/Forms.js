import React, { Component } from 'react'

export default class Forms extends Component {

  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:""
    };
    this.inputOne = React.createRef();
    this.inputTwo = React.createRef();
  }

    onSubmit = () =>{
      console.log(this.inputOne.value)
      console.log(this.inputTwo.value)
    }

  render() {
    return (
      <div>
        <form>
            <h2>Form Component</h2>
            <input type="text" name='firstName'ref={input => this.inputOne = input} />
            <input type="text" name='lastName' ref={input => this.inputTwo = input} />
            <button type='button' onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
