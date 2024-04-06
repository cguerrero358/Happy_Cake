
import Nav from './assets/components/Nav'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>

      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      

    </BrowserRouter>
      
    </>
  )
}

export default App
