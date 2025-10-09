import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Number from './components/Number'
import Footer  from './components/Footer';
function App() {
 return (
  <>
   <Navbar />
   <Hero />
   <Skill/>
   <Portfolio/>
   <Number/>
   <Footer/>
   <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Hello React + Vite + Bun 🚀</h1>
  </>
 );
}

export default App;
