import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home'
import Join from './pages/Join/Join';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
