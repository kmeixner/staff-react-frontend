import React, { Component } from 'react';
import StaffDisplay from './StaffDisplay';
import './App.css';

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

const staff_data = {
	"cooks": cooks_data,
	"waiters": waiters_data
};

function App() {
  return (
    <div className="App">
		<StaffDisplay data={staff_data} />
    </div>
  );
}

export default App;