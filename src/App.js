import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment'

const events = [
  { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
  { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
  { ts: "2017-09-17T12:20:46.587Z", text: "Edited Profile" },
  { ts: "2017-09-16T12:22:46.587Z", text: "Registered" },
  { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
  { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
  { ts: "2017-09-16T12:20:46.587Z", text: "Clicked Checkout" }
];

function App() {
  return (
    <div>
      {events.map(event => (
        <div>
          <p>{moment(event.ts).format("DD MMM YYYY")}</p>
          <p>{event.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
