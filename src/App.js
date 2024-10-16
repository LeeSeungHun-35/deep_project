import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './page/Home';
import Test from './page/Test';
import GoogleTrends from './page/GoogleTrends';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/GoogleTrends" element={<GoogleTrends />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;