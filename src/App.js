import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import StaffDisplay from './StaffDisplay';
import './App.css';

const API_URL = 'http://127.0.0.1:5000';
const API_GETCOOKS = API_URL+'/GetCooks'
const API_GETWAITERS = API_URL+'/GetWaiters'

// KM TO DO: Fetch this data from API:
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
	const [user, setUser] = useState([]);
	
	const fetchCooks = () => {
		// TO DO: set this to API_GETCOOKS
		return fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => console.log(data));
	}

	const fetchWaiters = () => {
		// TO DO: set this to API_GETWAITERS
		return fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => console.log(data));
	}	
	
	useEffect(() => {
		// Note: useEffet() is a React Version 16.8.0+ ComponentDidMount() alternative for new function App(){} syntax
		fetchCooks();
		fetchWaiters();
	},[]);

	return (
		<div className="App">
			<StaffDisplay data={{"cooks": cooks_data, "waiters": waiters_data}} />
		</div>
	);
}

export default App;