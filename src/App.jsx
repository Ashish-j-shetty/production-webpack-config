import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from "./components/header";
import {Home} from "./components/home";
import {Profile} from "./components/profile";
import {About} from "./components/about";

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
