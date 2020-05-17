import React from 'react'
import { Timeline } from 'antd';

function TimelineShow({event, mode}) {

  return (
    <div style={{marginTop: '20px'}}>
      <Timeline mode={mode}>
          {event}
      </Timeline>
    </div>
  );
}

export default TimelineShow

