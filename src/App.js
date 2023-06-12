import React, { Component, useEffect, useState } from "react";
import StaffDisplay from './StaffDisplay';
import './App.css';

// KM TODO: Get fastify backend working and set to Fastify API rather than test data URLs
//const API_URL = 'http://127.0.0.1:5000';
//const API_GETCOOKS = API_URL+'/GetCooks'
//const API_GETWAITERS = API_URL+'/GetWaiters'
const API_URL = 'https://my-json-server.typicode.com/kmeixner/staff_db';
const API_GETCOOKS = API_URL+'/cooks'
const API_GETWAITERS = API_URL+'/waiters'

function App() {
	let [cooks_data, setCooksData] = useState(null);
	let [waiters_data, setWaitersData] = useState(null);	

	useEffect(() => {
		fetch(API_GETCOOKS)
			.then(response => response.json())
			.then(data => setCooksData(data))
	},[]);
	
	useEffect(() => {
		fetch(API_GETWAITERS)
			.then(response => response.json())
			.then(data => setWaitersData(data))
	},[]);	

	return (
		<div className="App">
			{cooks_data && waiters_data && <StaffDisplay data={{"cooks": cooks_data, "waiters": waiters_data}} />}
		</div>
	);
}

export default App;