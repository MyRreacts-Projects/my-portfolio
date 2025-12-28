
import './App.css';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/approutes';
import Navbar from './components/navbar';
function App() {

  return (
   
    <HashRouter>
<Navbar/>
   <AppRoutes/>
      </HashRouter>

  
   
  )
}

export default App;
