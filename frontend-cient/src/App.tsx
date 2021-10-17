import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ROUTES } from './constants/ROUTES'
import { BookDetails } from './pages/books/BookDetails'
import { Books } from './pages/books'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.BOOKS}>
          <Route path={`${ROUTES.BOOKS}/:id`}>
            <BookDetails />
          </Route>
          <Route path='/'>
            <Books />
          </Route>
        </Route>
        <Route path='/'>
          <Redirect to='/books'></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
