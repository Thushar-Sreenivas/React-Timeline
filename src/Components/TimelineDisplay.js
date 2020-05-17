import React from 'react'
import moment from 'moment'

const timeLineDisplay = () => {
    return (
        {events.map(event => (
            <div>
              <p>{moment(event.ts).format("DD MMM YYYY")}</p>
              <p>{event.text}</p>
            </div>
          ))}
    )
} 