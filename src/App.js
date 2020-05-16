import React from 'react';

import './App.css';
import moment from 'moment'
import Timeline from './Components/Timeline';

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
      <Timeline events={events}/>
    </div>
  );
}

export default App;
