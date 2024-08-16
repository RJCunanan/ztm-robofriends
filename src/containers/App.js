import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


class App extends Component {

    // Order that React functions will run here:
    // 1. constructor()
    // 2. render()
    // 3. componentDidMount()
    // 4. render()

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    // This is part of React so we don't need arrow functons here
    componentDidMount() {
        // fetch() is a method from the window object
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // NOTE: When creating your own functions in App, use arrow functions => so that
    // "this" will always refer to the App
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) // Anytime you want to change state, always do this.
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
    

export default App;