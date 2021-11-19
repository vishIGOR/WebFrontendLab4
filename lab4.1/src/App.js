import './App.css';
import NewsContainer from './components/news/newsContainer';
import NavBar from './components/navBar';
import NewsCarousel from './components/news/newsCarousel';
import NewsHeading from './components/news/newsHeading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={
            <div className="d-flex flex-column">
              <div className="news-content">
                <div className="container-lg">
                  <NewsCarousel />
                  <NewsHeading />
                  <NewsContainer />
                </div>
              </div>
              <div className="news-footer">
                <div>Footer</div>
              </div>
            </div>
          }>
          </Route>
          <Route path="/todos" element={
            <div>ку</div>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
