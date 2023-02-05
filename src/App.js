import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Blog from './Components/Blog';
import Layout from './Components/Layout';
import Pricing from './Components/Pricing';
import Services from './Components/Services';
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
