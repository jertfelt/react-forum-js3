import "./App.scss"; 
import Homepage from "./views/Homepage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import IndividualItem from "./views/IndividualItem";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <div className="content">
        <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/post/:id" element= {<IndividualItem />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
