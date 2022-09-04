// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/> 
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>     
          <Route path="/categoria/:categoriaid" element={<ItemListContainer/>}/>    
        </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;
