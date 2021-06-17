import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

const MoneyLifeDashboardPage = () => {
  return (
    <div>
      <h1>Money & Time App</h1>
    </div>
  )
}

const AddPage = () => {
  return (
    <div>
      <h1>Add Money</h1>
    </div>
  )
}

const EditPage = () => (
  <h1>Edit Money Page</h1>
)

const HelpPage = () => (
  <h1>Help Page</h1>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={MoneyLifeDashboardPage} exact={true} />
      <Route path='/create' component={AddPage} />
      <Route path='/edit' component={EditPage} />
      <Route path='/help' component={HelpPage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);

