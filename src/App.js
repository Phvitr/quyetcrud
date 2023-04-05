import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Delete from "./pages/Delete";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Detail from "./pages/Detail";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/edit/:id' element={<Update/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='/delete/:id' element={<Delete/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
