import Home from './componentes/Home/Home';
import CartContent from "./componentes/CartContent/CartContent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartContent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
 