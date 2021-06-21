// import React from 'react';
// import ReactDOM from 'react-dom';

// import AppRouter from './routers/AppRouter'


// ReactDOM.render(
//   <AppRouter />,
//   document.getElementById('root')
// );

// -------------------------- Redux -----------------------------

// import { createStore } from 'redux'

// const store = createStore((state = { count: 0 }, action) => {

//   switch (action.type) {
//     case 'INCREMENT':
//       const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
//       return {
//         count: state.count + incrementBy
//       }
//     case 'DECREMENT':
//       const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
//       return {
//         count: state.count - decrementBy
//       }
//     case 'RESET':
//       return {
//         count: 0
//       }
//     case 'SET':
//       return {
//         count: action.count
//       }
//     default:
//       return state
//   }

// })

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

// store.dispatch({
//   type: 'INCREMENT'
// })

// store.dispatch({
//   type: 'RESET'
// })

// store.dispatch({
//   type: 'DECREMENT'
// })

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// })

// store.dispatch({
//   type: 'SET',
//   count: 101
// })

// Object Destructuring

// const person = {
//   name: 'Athos',
//   age: 40,
//   location: {
//     city: 'New York',
//     temp: 78
//   }
// }

// const { name, age } = person
// const { city, temp } = person.location

// console.log(`${name}, is ${age}`);
// console.log(`It is ${temp} in ${city}`)

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'self-published' } = book.publisher

// console.log(publisherName)

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state = 'New York'] = address

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee, , medium] = item

console.log(`A medium ${coffee} costs ${medium}`);

