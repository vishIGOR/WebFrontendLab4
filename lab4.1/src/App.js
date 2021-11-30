import './App.css';
import NavBar from './components/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsRoute from './components/news/newsRoute';
import TodoRoute from './components/todo/todoRoute';
import React from 'react';
import authorize, { todoApi } from './api/todoApi';

class App extends React.Component {
  componentDidMount(){
    authorize();
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<NewsRoute />}></Route>
            <Route path="/todo" element={<TodoRoute />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  
    );
  }
  
}

export default App;
