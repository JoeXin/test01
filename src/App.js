import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd'


const Buttons = ({ color, text }) => {
  return {
    type: 'button',
    props: {
      className: `btn btn-${color}`,
      children: {
        type: 'em',
        props: {
          children: text,
        },
      },
    },
  }
}

function App() {
  return (
    <div className="App">
      <Button type="primary">
          Download
      </Button>
      {/* <Buttons color={'blue'}  text={'sddf'}></Buttons> */}
    </div>
  );
}

export default App;
