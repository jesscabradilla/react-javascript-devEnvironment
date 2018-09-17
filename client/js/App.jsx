import React, { Component } from 'react';

const TextBox = () => {
  return (
    <div>
      <textbox>Happy coding! :)</textbox>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React JavaScript Boilerplate</h1>
        <br/>
        <TextBox />
      </div>
    )
  }
}

export default function Main() {
  return (
    <div>
      <div>
      <App />
      </div>
    </div>
  )
}
