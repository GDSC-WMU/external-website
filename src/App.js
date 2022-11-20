import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
