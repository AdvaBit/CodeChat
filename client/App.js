import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { Component } from 'react';
import AddWorkout from './components/AddWorkout';
import PriorWorkout from './components/PriorWorkout';
import GetWorkoutByType from './components/GetWorkoutByType';
import GetWorkoutByDate from './components/GetWorkoutByDate';
import UpdateWorkout from './components/UpdateWorkout';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: '',
    };

  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div id='container'>
          <div>
            <AddWorkout handleSubmit={this.addWorkout}/>
            <PriorWorkout handleClick={this.deleteWorkout} workouts={this.state.workouts}/>
            <UpdateWorkout handleClick={this.updateWorkout}/>
          </div>
          <GetWorkoutByType handleSubmit={this.getWorkoutByType} type={this.state.type}/>
          <GetWorkoutByDate handleSubmit={this.getWorkoutByDate} handleClick={this.deleteWorkout} date={this.state.date}/>
      </div>
    );
  }
}

export default App;
