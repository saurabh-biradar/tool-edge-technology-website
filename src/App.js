import './App.css';
import './styles/global.css'
import Layout from './components/Layout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home'
import Services from './pages/Services';
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
