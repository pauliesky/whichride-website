
import './App.css';
import About from './Component/AboutUs/About';
import FetchData from './Component/FetchData';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import ShowData from './Component/ShowData';
import TheApp from './Component/TheApp/TheApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FetchData />} />
            <Route path='/blog/:slug' element={<ShowData />} />
          </Routes>
        </BrowserRouter>

        {/* <Navbar /> */}
        {/* <Hero /> */}
        {/* <TheApp /> */}
        {/* <About /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
