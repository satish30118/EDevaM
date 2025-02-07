import Home from './Components/Home/home'
import NavBar from './Components/NavBar/nav'
import About from './Components/About/about'
import Awards from './Components/Awards/awards'
import Research from './Components/Research/research'
import People from './Components/People/people'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import Gallery from './Components/Gallery/gallery'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Publications from './Components/publication/Publications'
import Facilities from './Components/facilities/Facilities'
import "./App.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
      <div className="App">
          <Router>
            <NavBar />
            <Routes>
              <Route exact={true} path='/' element={<Home />} />
              <Route exact={true} path='/about' element={<About />} />
              <Route exact={true} path='/research' element={<Research />} />
              <Route exact={true} path='/people' element={<People />} />
              <Route exact={true} path='/facilities' element={<Facilities />} />
              <Route exact={true} path='/publication' element={<Publications />} />
              <Route exact={true} path='/awards' element={<Awards />} />
              <Route exact={true} path='/contact' element={<Contact />} />
              <Route exact={true} path='/gallery' element={<Gallery />} />
              <Route exact={true} path='/admin/login' element={<Gallery />} />

            </Routes>
            <Footer />
          </Router>
      </div>
  );
}

export default App;
