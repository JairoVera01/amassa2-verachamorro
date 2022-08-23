// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/navBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  const onAdd = () =>{
    
  }
  return (
    <div className="App ">
      <NavBar/>
      <ItemListContainer/>
      <hr></hr>
      <div className="container mt-5">
        <div className="row  text-center">
          <div className="col">
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
          </div>
          <div className="col">
            <ItemCount stock={0} initial={1} onAdd={onAdd}/>
          </div>
          <div className="col">
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
          </div>
        </div>
      </div>
    </div>   
  );
}

export default App;
