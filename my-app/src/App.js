
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sample from './components/Sample';
import Sim from './components/Sim';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Sim/>}/>

      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
