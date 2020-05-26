import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './counter.js'
import counterReducer from './reducers'
const store = createStore(counterReducer)

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

ReactDOM.render(<App/>, root)