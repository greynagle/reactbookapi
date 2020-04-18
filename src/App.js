import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

export default class App extends Component {
  state = {

  }
  
  render() {
    return (
      <main className="App">
        <header>
			<h1>
				Google Book Search
			</h1>
		</header>
		<Search />
		<Results />
      </main>
    );
  }
}