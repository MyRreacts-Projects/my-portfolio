
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/approutes';
import Navbar from './components/navbar';
function App() {

  return (
   <BrowserRouter>
    <Navbar/>
   <AppRoutes/>
  
   </BrowserRouter>
  )
}

export default App;
