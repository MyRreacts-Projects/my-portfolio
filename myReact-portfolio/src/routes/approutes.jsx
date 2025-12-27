// approutes.jsx
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Resume from '../pages/resume';
import Contact from '../pages/contact';
import Services from '../pages/services';
import JavascriptProjects from '../pages/javascriptprojects';
import CssProjects from '../pages/cssprojects';
import CodingExercises from '../pages/codingexercises';
import BeyondCode from '../pages/beyondcode';

// AppRoutes 
const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/cssprojects' element={<CssProjects/>}/>
            <Route path='/javascriptprojects' element={<JavascriptProjects/>}/>
            <Route path='/codingexercise' element={<CodingExercises/>}/>
            <Route path='/beyondcode' element={<BeyondCode/>}/>
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
    )
}
export default AppRoutes;