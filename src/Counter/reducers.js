const initialState = {
  count: 0
}
export default function counterReducer (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload
      }
    case 'DECREMENT':
      return {
        count: state.count - action.payload
      }
    default:
      return state
  }
}