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

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset())
//   }
// }
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


// dispat
export default connect(mapStateToProps, {increment, decrement})(Counter)