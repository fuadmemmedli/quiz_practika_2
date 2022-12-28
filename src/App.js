import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/NAvbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Add from './components/Add';
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
