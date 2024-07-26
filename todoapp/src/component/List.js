import React, { Component } from "react";

export default class List extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Aman",
        age: 20,
      },
      {
        id: 2,
        name: "Mehek",
        age: 19,
      },
    ],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((value, index) => (
            <div>
              <li key={value.id}>
                {value.id} - {value.name} - {value.age}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
