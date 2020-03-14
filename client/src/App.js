import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
      <h1>fAvORiTe aUtHOrS</h1>
      <Router>
        <Main path="/"/>
        <New path="new/"/>
        <Edit path="edit/:id"/>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
