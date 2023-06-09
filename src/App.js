import React, { Component } from 'react';
import './App.css';

const MONDAY = 0;
const TUESDAY = 1;
const WEDNESDAY = 2;
const THURSDAY = 3;
const FRIDAY = 4;
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const COOKS = 0;
const WAITERS = 1;
const staffType = ['Cooks', 'Waiters'];

class StaffDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stafftype: 0,
	  weekday: 0,
    }	
  }
  handlePrevClick(){
	  if (this.weekday < TUESDAY) {
		  return;
	  }
	  else {
		this.setState({
		  stafftype: this.state.stafftype,
		  weekday: this.state.weekday-1
		});		  
	  }
  }
  handleNextClick(){
	  if (this.weekday > THURSDAY) {
		  return;
	  }
	  else {
		this.setState({
		  stafftype: this.state.stafftype,
		  weekday: this.state.weekday+1
		});		  
	  }
  }  
  render() {
    return (
    <div>
		<h1>{staffType[this.state.stafftype]}</h1>
		
		<h2>{daysOfWeek[this.state.weekday]}</h2>
		
		<ul>
			<li>No Staff Scheduled</li>
		</ul>
		
		<button disabled={this.state.weekday < TUESDAY} onClick={this.handlePrevClick.bind(this)}>
			Prev
		</button>
		<button disabled={this.state.weekday > THURSDAY} onClick={this.handleNextClick.bind(this)}>
			Next
		</button>
    </div>
    );
  }
};

function App() {
  return (
    <div className="App">
		<StaffDisplay />
    </div>
  );
}

export default App;