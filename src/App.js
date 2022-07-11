import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll> 
                        <CardList robots = { filteredRobots } />
                    </Scroll>
                </div>
            );
        }
        
    }
    
}

export default App;