import React from 'react'
import ReactDOM from 'react-dom';
import Counter from './counter.js'


const root = document.getElementById("root")


const App = () => {
  return(
    <div>
      <Counter></Counter>
    </div>
  )
}

ReactDOM.render(<App/>, root)