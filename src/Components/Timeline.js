import React from 'react'
import { useState } from 'react';
import moment from 'moment'
import 'antd/dist/antd.css';
import TimelineShow from './UI/TimelineShow'
import { Timeline, Button } from 'antd';
import RadioInput from './UI/RadioInput';
import classes from '../Components/Timeline.css'

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
    
    export default function Display({events}) {
    const [mode, setMode] = useState('left');
    function handleChange(newMode) {
        setMode(newMode);
      }
    
    let displayUI = []
    const userEventActivity = TimelineEvent(events)
    const dates = Object.keys(userEventActivity)
    return (
        <div className={classes.card}>
            <RadioInput value={mode} onChange={handleChange}/>
            {dates.map(date => (
            <div key={date} >
                <Button type="primary" shape="round" size="large" >{date}</Button>
                <br></br>
                {userEventActivity[date].map(event => {
                displayUI.push(<Timeline.Item 
                    label={event.time}
                    key={event.key}>{event.text}</Timeline.Item>)
                })}
                <TimelineShow event={displayUI} key={date} mode={mode}/>
                {console.log(displayUI = [])}
            </div>
            ))}
        </div>
    )
    
}

