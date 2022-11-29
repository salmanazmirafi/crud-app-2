import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { UseProvider } from "./components/UseContax/UseCotx";
import Delet from "./components/Delete/Delet";
import Red from "./components/Read/Red";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <>
      <UseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delete/:id" element={<Delet />} />
            <Route path="/red/:id" element={<Red />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </UseProvider>
    </>
  );
}

export default App;
