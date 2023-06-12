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
      stafftype: this.props.current_path === '/Waiters' ? WAITERS : COOKS,
	  weekday: 0,
    }
  }
  // Helper function:
  getStaffTypeForDay() {
	let staffList = [];
	switch (this.state.stafftype) {
		case COOKS:
			staffList = this.props.data['cooks'];
			break;
		case WAITERS:
			staffList = this.props.data['waiters'];
			break;
		default:
			console.log('ERROR: Received unhandled stafftype');
			return [];
	}
	switch (this.state.weekday) {
		case MONDAY:
			return staffList['monday'];
			break;
		case TUESDAY:
			return staffList['tuesday'];
			break;
		case WEDNESDAY:
			return staffList['wednesday'];
			break;
		case THURSDAY:
			return staffList['thursday'];
			break;
		case FRIDAY:
			return staffList['friday'];
			break;
		default:
			console.log('ERROR: Received unhandled weekday');
			return [];		
	}
  }
  // Event Handlers:
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
		window.location	= this.props.cooks_path;
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
		window.location	= this.props.waiters_path;		
	  }
  }
  render() {
	const stafffortoday = this.getStaffTypeForDay();
	const stafflist = (Array.isArray(stafffortoday) && stafffortoday.length) 
		? this.getStaffTypeForDay().map(i => <li className="stafflistline" key={i}>{i}</li>) 
		: <div className="stafflistline">None</div>;
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
		
		<div className="stafflist">
			<ul>
				{stafflist}
			</ul>
		</div>
		
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