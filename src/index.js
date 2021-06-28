import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill', amount: 56 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 12 }))
store.dispatch(setTextFilter('gas'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

