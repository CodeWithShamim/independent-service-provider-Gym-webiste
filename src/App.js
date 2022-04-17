import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
