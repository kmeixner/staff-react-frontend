import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import StaffDisplay from './StaffDisplay';
import './App.css';

const API_URL = 'http://127.0.0.1:5000';
const API_GETCOOKS = API_URL+'/GetCooks'
const API_GETWAITERS = API_URL+'/GetWaiters'

// KM TO DO: Fetch this data from API and remove these data constants below:
const cooks_data = {
    "monday": [
        "John",
        "William",
        "James",
        "Charles"
    ],
    "tuesday": [
        "George",
        "Frank",
        "Joseph"
    ],
    "wednesday": [
        "Thomas",
        "Henry",
        "Robert",
        "Edward",
        "Harry",
        "Walter"
    ],
    "thursday": [
        "Albert",
        "Samuel",
        "David",
        "Louis",
        "Joe",
        "Charlie"
    ],
    "friday": [
        "Clarence",
        "Richard",
        "Andrew",
        "Daniel",
        "Ernest"
    ]
}

const waiters_data = {
    "monday": [
       
    ],
    "tuesday": [
        "Roy",
        "Herbert",
        "Jacob",
        "Tom",
        "Elmer",
        "Carl",
        "Lee"
    ],
    "wednesday": [
        "Peter",
        "Benjamin",
        "Frederick",
        "Willie",
        "Alfred",
        "Sam"
    ],
    "thursday": [
        "Will",
        "Jesse",
        "Oscar",
        "Lewis"
    ],
    "friday": [
        "Herman",
        "Jim",
        "Francis",
        "Harvey",
        "Earl",
        "Eugene",
        "Ralph",
        "Ed"
    ]
}

function App() {
	// NOTE: Backend API is not working so using test data defined in consts above to test until API is fixed
	/*
	const [user, setUser] = useState([]);
	let cooks_data = {"monday": [], "tuesday": [], "wednesday": [], "thursday": [], "friday": []};
	let waiters_data = {"monday": [], "tuesday": [], "wednesday": [], "thursday": [], "friday": []};
	
	const fetchCooks = () => {
		return fetch(API_GETCOOKS)
			.then((response) => response.json())
			.then((data) => {cooks_data = data})
			.catch((error) => {
				console.log(error)
			});			
	}

	const fetchWaiters = () => {
		return fetch(API_GETWAITERS)
			.then((response) => response.json())
			.then((data) => {waiters_data = data})
			.catch((error) => {
				console.log(error)
			});
	}	
	
	useEffect(() => {
		// Note: useEffet() is a React Version 16.8.0+ ComponentDidMount() alternative for new function App(){} syntax
		fetchCooks();
		fetchWaiters();
	},[]);
	*/

	return (
		<div className="App">
			<StaffDisplay data={{"cooks": cooks_data, "waiters": waiters_data}} />
		</div>
	);
}

export default App;