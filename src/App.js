import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" render={() => <SearchPage />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;