import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Trivia from './trivia/Trivia';



function App() {

  return (
    <div className='app'>
      <Header></Header>
      <p>This is the Game Center.</p>
      <BrowserRouter>
      <div className='menu container'>
        <h2>Menu</h2>
        <p>
            <Link to="/">Home</Link>
        </p>
        <p>
            <Link to="/trivia">Trivia</Link>
        </p>
      </div>
        <Routes>
          <Route path='/trivia' element={<Trivia/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
