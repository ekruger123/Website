import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Footer from './Footer';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className='container w-75 p-3'>
    <Router>
      <NavBar />
    <Routes> 
      <Route path='/'
              element={<Home />}>
      </Route> 

      <Route path='/Projects'
              element={<Projects />}>
      </Route>

      <Route path='*'
              element={<NotFound />}>
      </Route>
      
     </Routes>  
     <Footer />
    </Router>
    </div>
  );
  
  }
export default App;
