import React, {Fragment} from 'react';
import './App.css';

import InputTodo from './components/InputTodo.js';
import ListTodo from './components/ListTodo.js';

function App() {
  return (
    <Fragment>
      <div className="body">
        <InputTodo/>
        <ListTodo/>
      </div>
    </Fragment>
  )
}

export default App;
