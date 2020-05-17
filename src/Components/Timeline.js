import React from 'react'
import { useState } from 'react';
import moment from 'moment'
import SimpleCard from './UI/TimelineDisplay';
import 'antd/dist/antd.css';
import TimelimeLabelDemo from '../Components/UI/TimelineAntisplay'
import { Timeline, Button, Radio } from 'antd';
import {Remove} from 'react-lodash'
import RadioInput from './UI/RadioInput';

const testEvents = [
    { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
    { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
    { ts: "2017-09-17T12:20:46.587Z", text: "Edited Profile" },
    { ts: "2017-09-16T12:22:46.587Z", text: "Registered" },
    { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
    { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
    { ts: "2017-09-16T12:20:46.587Z", text: "Clicked Checkout" }
  ];

const TimelineEvent = (events) => {
    let userEventDetails = {};
    let userEventArray = []
        events.map((event, index) => {
            let date = moment(event.ts).format("DD MMM YYYY");
            userEventArray = userEventDetails[date] || [];
            userEventArray.push({
                time: moment(event.ts).format('HH mm'),
                text: event.text,
                key: index                
            })
            userEventDetails[date] = userEventArray
        })
    return userEventDetails
}
    

// const display = ({events}) => {
    export default function Display({events}) {
    const [mode, setMode] = useState('left');
    function handleChange(newMode) {
        setMode(newMode);
      }
    
    let displayUI = []
    const userEventActivity = TimelineEvent(events)
    let userEvent = []
    const dates = Object.keys(userEventActivity)
    return (
        <div>
            <RadioInput value={mode} onChange={handleChange}/>
            {dates.map(date => (
            <div key={date} >
                <Button type="primary" shape="round" size="large" style={{textAlign: "center"}}>{date}</Button>
                {userEventActivity[date].map(event => {
                displayUI.push(<Timeline.Item 
                    label={event.time}
                    key={event.key}>{event.text}</Timeline.Item>)
                {console.log("Inside Push", displayUI)}
                })}
                <TimelimeLabelDemo event={displayUI} key={date} mode={mode}/>
                {console.log(displayUI = [])}
            </div>
            ))}
        </div>
    )
    
}

