import React from 'react'
import moment from 'moment'

const testEvents = [
    { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
    { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
    { ts: "2017-09-17T12:20:46.587Z", text: "Edited Profile" },
    { ts: "2017-09-16T12:22:46.587Z", text: "Registered" },
    { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
    { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
    { ts: "2017-09-16T12:20:46.587Z", text: "Clicked Checkout" }
  ];

const Timeline = (events) => {
    let userEventDetails = {};
    let userEventArray = []
    console.log("Timeline -> userEventDetails", userEventDetails);
    console.log("Timeline -> userEventArray", userEventArray);
        events.map((event, index) => {
            let date = moment(event.ts).format("DD MMM YYYY");
            userEventArray = userEventDetails[date] || [];
            console.log("Before -> userEventDetails", userEventDetails)
            userEventArray.push({
                time: date,
                text: event.text,
                key: index                
            })
            userEventDetails[date] = userEventArray
            console.log("After -> userEventArray", userEventArray)
            console.log("After -> userEventDetails", userEventDetails)
        })
        console.log("Final -> userEventArray", userEventArray)

    return userEventDetails
}
    


const display = ({events}) => {
    const userEventActivity = Timeline(events)
    console.log("Last Function -> userEventActivity", userEventActivity)
    return (
        <div>
            <h1>{events[0].ts}</h1>
        </div>
    )
}

export default display