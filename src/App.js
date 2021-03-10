import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Home from './home'
import Page1 from './onepage'

function App() {
  const pages = [
    { pageLink: '/', view: Home},
    {pageLink: '/one', view: Page1},
  ]
  return (
    <div className="App">
      <Router>
        <Route 
        render={({location}) => (
          <>
          <Switch location={location}>
            {pages.map((page, index) => (
              <Route
              exact
              path={page.pageLink}
              render={({match}) => <page.view />}
              key={index} />
            ))}
          </Switch>
          </>
        )}
        />
      </Router>
    </div>
  );
}

export default App;
