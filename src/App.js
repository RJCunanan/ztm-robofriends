import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from "./robots";


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    // NOTE: When creating your own functions in App, use arrow functions => so that
    // "this" will always refer to the App
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) // Anytime you want to change state, always do this.
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}
    

export default App;