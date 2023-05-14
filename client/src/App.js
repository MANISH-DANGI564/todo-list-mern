// import logo from './logo.svg';
import './App.css';
import React from 'react';
// All Components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
        <Header/>
        <TodoForm/>
        <Todos/>
    </div>
  );
}

export default App;
