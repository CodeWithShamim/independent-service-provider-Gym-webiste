import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Checkout from "./components/Checkout/Checkout";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/Shared/NotFound";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/checkout/:checkoutId"
          element={<Checkout></Checkout>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
