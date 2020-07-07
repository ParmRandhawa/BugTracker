import React from 'react';
import Header from './components/Header';
import BugList from './components/BugList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BugList />
      </div>
    );
  }
}

export default App;
