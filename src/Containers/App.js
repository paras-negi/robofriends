import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
//import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }
        
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users})
           );
        }

    onsearchChange= (event) => {
        this.setState({searchField: event.target.value});
        }
        

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

    //if (robots.length === 0)
    return !robots.length ?
        <h1>Loading...</h1> :
    
    //else {
        (
            <div className= 'tc'>
                <h1 className= 'f2'>Robofriends</h1>
                <Searchbox searchChange= {this.onsearchChange}/>
                <Scroll>
                    <Cardlist robots= {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App; 