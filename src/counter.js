import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const Counter = () => {
  let initialState = {
    counter: 0
  }
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + 1
        }
      case 'DECREMENT':
        return {
          ...state,
          counter: state.counter - 1
        }
      default:
          return state
    }
  }

  let store = createStore(counterReducer)


  const increment = () => {
    store.dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    store.dispatch({ type: 'DECREMENT' })
  }

  store.subscribe(() => console.log(store.getState()))

  return(
    <Provider store={store}>
      <>
      <button onClick={() => increment() }>INCREMENT</button>
      <button>{store.getState().counter}</button>
      <button onClick={() => decrement() }>DECREMENT</button>
      </>
    </Provider>
  )


}

export default Counter;