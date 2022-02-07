import React from 'react';
import './App.css';
import { Header } from './Header';
import { Main } from './Main';
import { SearchForm } from './SearchForm';
import { ResultsList } from './ResultsList';
import { Result } from './Result';

function App() {

  return (

    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>

  );
}

export default App;