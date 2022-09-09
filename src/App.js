import "./App.scss"; 
import Homepage from "./views/Homepage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
      <Homepage />
      </div>
     
    </div>
  );
}

export default App;
