
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Headers from './components/Headers';
import AddCarts from './components/AddCarts';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <div className="App">
    <Headers />
    <Routes>
      <Route  path='/' element={<Cards />} />
      <Route  path='/carts' element={<AddCarts />} />
      <Route  path='/cartDetails/:id' element={<CardDetails />} />
    </Routes>
      
    </div>
  );
}

export default App;
