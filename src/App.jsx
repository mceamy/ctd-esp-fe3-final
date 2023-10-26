
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Footer from "./Components/Footer";
import { ContextGlobalProvider } from "./Components/utils/global.context";


function App() {
  return (
      <div className="App">
      <ContextGlobalProvider>
        <BrowserRouter>
          <Layout>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/detail/:id" element={<Detail/>}></Route>
              <Route path="/favorites" element={<Favs/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
          </Layout> 
        </BrowserRouter>
        <Footer/>
      </ContextGlobalProvider>
      
      </div>
  );
}

export default App;
