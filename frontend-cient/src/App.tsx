import { Breadcrumb, Layout, Menu } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import { ErrorMessage } from './components/ErrorMessage'
import { NavigationCrumb } from './components/NavigationCrumb'
import { ROUTES } from './constants/ROUTES'
import Store from './models/Store'
import { Books } from './pages/books'
import { BookDetails } from './pages/books/BookDetails'

const { Header, Content, Footer } = Layout

function App() {
  const { error } = useSelector((store: Store) => store)
  return (
    <BrowserRouter>
      <Layout>
        <Header className='header'>
          <div className='logo'>
            <h2>LOGO</h2>{' '}
          </div>
          <Menu theme='dark' mode='horizontal' className='nav'>
            <Menu.Item key='1'>
              <Link to={ROUTES.BOOKS}>Home</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className='content'>
          <NavigationCrumb />
          <Layout className='main-content'>
            <Switch>
              <Route path={ROUTES.BOOKS}>
                <Switch>
                  <Route path={`${ROUTES.BOOKS}/:id`}>
                    <BookDetails />
                  </Route>
                  <Route path='/'>
                    <Books />
                  </Route>
                </Switch>
              </Route>
              <Route path='/'>
                <Redirect to='/books'></Redirect>
              </Route>
            </Switch>
          </Layout>
        </Content>
        {error?.message && <ErrorMessage message={error.message} /> }
        <Footer style={{ textAlign: 'center' }}>
          <a href='mailto:haileyesuszemed@gmail.com'>Haileyesus Zemed</a> &copy;
          2021
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}

export default App
