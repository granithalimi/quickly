import { React, useState, createContext} from "react"
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paths/Home';
import Products from "./paths/Products";

export const ColorContext = createContext();

function App() {
  const [dark, setdark] = useState(false)

  return (
    <ColorContext.Provider value={[dark, setdark]}>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </ColorContext.Provider>
  );
}

export default App;
