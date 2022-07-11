import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//import { robots } from './robots';
import './App.css'

//components and props (props.children for wrapping components) And states and lifecycles
class App extends React.Component {
    constructor() {
        super();
        this.state = { // in parent state, in child props.
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() { //lifecycle hooks
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));

        //this.setState({robots: users}); // setstate will run the render again. constructor => render => componentDidMount => render
    }

    onSearchChange = (event) => { //arrow function makes sure that 'this' is for this class. communicate child => parent
        this.setState({searchfield: event.target.value});
    }

    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll> 
                        <ErrorBoundry>
                            <CardList robots = { filteredRobots } />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );   
    }
    
}

export default App;