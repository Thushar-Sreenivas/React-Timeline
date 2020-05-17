import React from 'react'
import { Timeline } from 'antd';

function TimelineShow({event, mode}) {

  return (
    <div>
      <Timeline mode={mode}>
          {event}
      </Timeline>
    </div>
  );
}

export default TimelineShow

