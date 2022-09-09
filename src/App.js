// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App ">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/> 
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>     
            <Route path="/categoria/:categoriaid" element={<ItemListContainer/>}/>    
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider> 
    </div>   
  );
}

export default App;
