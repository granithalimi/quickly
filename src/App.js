import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paths/Home';

function App() {
  return (
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
