// import React from 'react';
// import ReactDOM from 'react-dom';

// import AppRouter from './routers/AppRouter'


// ReactDOM.render(
//   <AppRouter />,
//   document.getElementById('root')
// );

// ------------------------- Redux Expensify ------------------------------

import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)
store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1350 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 2 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

const demoState = {
  expense: [{
    id: 'dfafadsf',
    description: 'January Rent',
    note: 'This was the final payment for this address',
    amount: 54500,
    createdAt: 500000
  }],

  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}


