
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/approutes';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import CssProjects from './pages/cssprojects';
import JavascriptProjects from './pages/javascriptprojects';
function App() {

  return (
   
    <BrowserRouter>
<Navbar/>

   <AppRoutes/>
      </BrowserRouter>

  
   
  )
}

export default App;
