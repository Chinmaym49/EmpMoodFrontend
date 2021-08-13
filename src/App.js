import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoodGraph from './components/MoodGraph';
import AvgMood from './components/AvgMood';

class App extends Component{
  state = {
    data: {"ten":0, "nine":0, "eight":1, "seven":1, "six":1, "five":0, "four":0, "three":0, "two":0, "one": 0}
  }
  render () {
    const { data } = this.state;
    return (
      <div className="App">
        <div className="moodGraph">
          <MoodGraph data = { data }/>
        </div>
        <div className="avgMood">
          <AvgMood data = { data } />
        </div>
        

      </div>
      
    );
  }
  
}

export default App;
