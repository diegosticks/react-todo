import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      item: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }
  render() {
    return (
      <div className='App'>
        <header>
          <form id='to-do-form'>
            <input type='text' placeholder='Enter Text' />
            <button type='submit'>Add</button>
          </form>
        </header>
      </div>
    )
  }
}

export default App
