import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/css/styles.css';
import SearchPage from './components/SearchPage';
import BookPage from './components/BookPage';
import SearchFrom from './components/search-form/SearchForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchFrom />
        <Switch>
          <Route path="/:bookId" render={() => <BookPage />} />
          <Route path="/" render={() => <SearchPage />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;