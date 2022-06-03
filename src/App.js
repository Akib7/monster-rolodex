import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/card-list/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ monsters: data });
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  //Arrow function automatically binds the 'this' keyword
  //to the class where it is defined at the first place.
  //In here the arrow function is defined in this 'app class, handleChnage method'.
  //So, it automatically binded it to the 'app class and handleChnage method'.

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        {/* <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) =>
            this.setState(
              { searchField: e.target.value }
              // () => console.log(this.state) // if we want to do anything after just setting the state, then we have to do it inside the second parameter of 'this.setState' which is a callback function
            )
          }
        /> */}

        <CardList monsters={filteredMonsters}>
          {/* <CardList monsters={this.state.monsters}> */}
          {/* <h1>Akib Ahmed</h1> */}
          {/* {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))} */}
        </CardList>
        {/* <CardList the name here is for the properties/parameters>
        And thing that stands in between tags is the children
        </CardList> */}
      </div>
    );
  }
}

export default App;
