import About from "./components/about";
import HomePage from "./pages/home-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<About/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
