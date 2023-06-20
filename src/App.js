import './App.css';
import Index from './pages/Index';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Navbar from './pages/Navbar';
import { Route, Routes } from 'react-router-dom';
// import { industryDropdown } from './pages/NavItem';
// import { iptvDropdown } from './pages/NavItem';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element= {<Index/>}></Route>
      <Route exact path='/Pricing' element= {<Pricing/>}></Route>
      <Route exact path='/Blog' element= {<Blog/>}></Route>
    </Routes>
    {/* <Index /> */}
    </>
  );
}

export default App;
