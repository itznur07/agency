import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>} >
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
