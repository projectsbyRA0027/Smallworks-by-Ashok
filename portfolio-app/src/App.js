import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer'
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
     <div className='App'>
           <Header />
           <Hero />
           <About/>
           <Resume />
           <Projects />
           <Contact/>
           <Footer />
    </div>

  );
}

export default App;
