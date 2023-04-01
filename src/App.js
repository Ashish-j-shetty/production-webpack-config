import { BrowserRouter, Route, Routes } from "react-router-dom";


 const  About=()=>{
    return <div>about</div>
}
const Header=()=>{
    return <div>header</div>
}

 const Home=()=>{
    return<div>home</div>
}

 const  Profile=()=>{
    return<div>Profile</div>
}

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
