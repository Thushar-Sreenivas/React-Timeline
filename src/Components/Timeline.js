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
    // console.log("Timeline -> userEventDetails", userEventDetails);
    // console.log("Timeline -> userEventArray", userEventArray);
        events.map((event, index) => {
            let date = moment(event.ts).format("DD MMM YYYY");
            userEventArray = userEventDetails[date] || [];
            // userEventArray = userEventDetails[date]?null:[]
            // console.log("Before -> userEventDetails", userEventDetails)
            userEventArray.push({
                time: moment(event.ts).format('HH mm'),
                // time: date,
                text: event.text,
                key: index                
            })
            userEventDetails[date] = userEventArray
            // console.log("After -> userEventArray", userEventArray)
            // console.log("After -> userEventDetails", userEventDetails)
        })
        // console.log("Final -> userEventArray", userEventArray)

    return userEventDetails
}
    


const display = ({events}) => {
    const userEventActivity = Timeline(events)
    // console.log("Last Function -> userEventActivity", userEventActivity)
    let userEvent = []
    const dates = Object.keys(userEventActivity)
    // console.log("display -> Object.keys(userEventActivity)", Object.entries(userEventActivity))
    // console.log(dates);
    return (
        <div>
            {dates.map(date => (
            <ul key={date}>
                <li>{date}</li>
                {/* {userEventActivity.date[0]} */}
                {console.log("display", userEventActivity[date])}
                {userEventActivity[date].map(event => (
                    // console.log("Events ", event);
                    <p>{event.text}</p>
                ))}
            </ul>
            
            ))}
        </div>
    )
    
}

export default display