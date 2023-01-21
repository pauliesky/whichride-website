
import './App.css';
import About from './Component/AboutUs/About';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import TheApp from './Component/TheApp/TheApp';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <TheApp />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
