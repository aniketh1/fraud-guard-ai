import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Detect from './Components/Detect'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Detect/>
      <Footer/>
    </div>
  );
}

export default App;
