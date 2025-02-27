import './App.css';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Quotation from './components/Quotation';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Companies from './components/Companies';
import Achivments from './components/Achivments';
import ContactMe from "./components/ContactMe";
import Footer from './components/Footer';


function App() {
  return (
      <div className={"app"}>
        <Menu/>
          <Hero/>
          <Quotation/>
          <AboutMe/>
          <Skills/>
          <Companies/>
          <Achivments/>
          <ContactMe/>
        <Footer/>
      </div>
  );
}

export default App;
