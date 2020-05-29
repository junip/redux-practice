import React from 'react';
import { connect } from 'react-redux'

const increment = () => ({
  type: 'INCREMENT',
  payload: 1
})

const decrement = () => ({
  type: 'DECREMENT',
  payload: 1
})

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const Counter = ({count, increment, decrement}) => {
  return (
    <>
    <button onClick={()=> {increment()}}>INCREMENT</button>
    <button>{count}</button>
    <button onClick={()=> {decrement()}}>DECREMENT</button>
    </>
  )
}


export default connect(mapStateToProps, {increment, decrement})(Counter)