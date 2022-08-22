// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  const onAdd = () =>{
    console.log("Soy onAdd");
  }
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      <ItemCount stock={0} initial={1} onAdd={onAdd}/>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>   
  );
}

export default App;
