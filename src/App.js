import "./App.scss"; 
import Homepage from "./views/Homepage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
      <Homepage />
      <Footer />
      </div>
     
    </div>
  );
}

export default App;
