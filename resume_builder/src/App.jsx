import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ViewResume from "./components/viewResume/ViewResume";
import CreateResume from "./components/createResume/CreateResume";

function App() {

  return (
    <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ViewResume />} />
            <Route path="/createResume" element={<CreateResume />} />
          </Routes>
        </BrowserRouter>
  </div>
  )
}

export default App
