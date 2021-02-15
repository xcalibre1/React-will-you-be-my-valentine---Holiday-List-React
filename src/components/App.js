
import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
Goa(India), Amsterdam(Netherlands), New York(USA), Darjeeling(India), Tokyo(Japan), Lonavala(India)
    this.cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India" },
    ];
  }

  render() {
    const arr = this.cityList.filter((item, index) => item.country === "India");
    return (
      <div id="main">
        <ol>
          {arr.map((item, index) => (
            <li key={`${item.name}${index+1}`}>
              {`${item.name}(${item.country})`}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
