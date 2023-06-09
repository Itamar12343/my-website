import ErrPage from "./pages/ErrPage";
import HomePage from "./pages/home-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<ErrPage/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
