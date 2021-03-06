import React from 'react'
import { Radio } from 'antd';

function RadioInput(props) {
//   const [mode, setMode] = useState('left');

  const onChange = e => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <Radio.Group
        onChange={onChange}
        value={props.value}
        style={{
          marginBottom: 20,
          
        }}
      >
        <Radio style={{color: 'white'}} value="left">Left</Radio>
        <Radio style={{color: 'white'}} value="right">Right</Radio>
        <Radio style={{color: 'white'}} value="alternate">Alternate</Radio>
      </Radio.Group>
      </div>
  );
}

export default RadioInput