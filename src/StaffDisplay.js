import React, { Component } from 'react';
import './StaffDisplay.css';

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
	  if (this.state.weekday < TUESDAY) {
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
	  if (this.state.weekday > THURSDAY) {
		  return;
	  }
	  else {
		this.setState({
		  stafftype: this.state.stafftype,
		  weekday: this.state.weekday+1
		});		  
	  }
  }
  handleViewCooksClick() {
	  if (this.state.stafftype === COOKS) {
		  return;
	  }
	  else {
		this.setState({
		  stafftype: COOKS,
		  weekday: this.state.weekday
		});		  
	  }
  }
  handleViewWaitersClick() {
	  if (this.state.stafftype === WAITERS) {
		  return;
	  }
	  else {
		this.setState({
		  stafftype: WAITERS,
		  weekday: this.state.weekday
		});		  
	  }
  }  
  render() {
    return (
    <div>
		<h1>{staffType[this.state.stafftype]}</h1>

		<button disabled={this.state.weekday < TUESDAY} onClick={this.handlePrevClick.bind(this)}>
			Prev
		</button>		
		&nbsp; <span className="dayOfWeekTitle">{daysOfWeek[this.state.weekday]}</span> &nbsp;
		<button disabled={this.state.weekday > THURSDAY} onClick={this.handleNextClick.bind(this)}>
			Next
		</button>		
		
		<ul>
			<li>No Staff Scheduled</li>
		</ul>
		
		{this.state.stafftype != COOKS &&
			<button onClick={this.handleViewCooksClick.bind(this)}>
				View Cooks
			</button>
		}
		{this.state.stafftype != WAITERS &&		
			<button onClick={this.handleViewWaitersClick.bind(this)}>
				View Waiters
			</button>
		}

    </div>
    );
  }
};

export default StaffDisplay;