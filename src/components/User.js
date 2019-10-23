import React, { Component } from "react";

export default class User extends Component {
  state = {
    starwarsPersonId: 1,
    person: null
  };

  componentDidMount() {
    fetch(`https://swapi.co/api/people/${this.state.starwarsPersonId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          starwarsPersonId: this.state.starwarsPersonId + 1,
          person: data
        });
        // this.state = { person: data }; // NO! react doesn't know that it should update
        // console.log(this.state);
      });
    console.log(
      "COMPONENTDIDMOUNT: We've shown our component to the world for the first time"
    );
  }

  componentDidUpdate() {
    console.log("COMPONENTDIDUPDATE: I UPDATED!");
    // fetch(`https://swapi.co/api/people/${this.state.starwarsPersonId}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({
    //       starwarsPersonId: this.state.starwarsPersonId + 1,
    //       person: data
    //     });
    //   });
  }

  componentWillUnmount() {
    // removing global event listeners
  }

  render() {
    console.log("RENDER GOT CALLED!");
    return (
      <div>
        <h1>name: {this.props.userName}</h1>
        <h1>{this.state.person ? this.state.person.name : null}</h1>
      </div>
    );
  }
}

// export default class User extends Component {
//   render() {
//     return (
//       // use props in the render of your component
//       <div>
//         {/* Use props by "interpolating" them into the JSX */}
//         <h1>name: {this.props.userName}</h1>
//         {/* <h2>{[<p>"Hello"</p>, <p>"Bye"</p>, <p>"Hello again"</p>]}</h2> */}
//         {/* {{ name: "Rein", age: 5 }} */}
//       </div>
//     );
//   }
// }
