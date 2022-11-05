///preentrega1_curacaram
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a la web de Moshi´s"} />
      
    </div>
  );
}

export default App;
