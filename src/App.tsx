import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import WhoWeAre from './components/WhoWeAre';
import Home from './components/Home';
import WhatWeDo from './components/WhatWeDo';
import Inspiration from './components/Inspiration';
import GetInTouch from './components/GetInTouch';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path='/niceshodz' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
