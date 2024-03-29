import React from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import { Header } from "./pages/header";
import { Home } from "./pages/home";

const About = React.lazy(() =>
  import("./pages/about").then((module) => ({
    default: module.About, // this method or use babel plugin babel-plugin-syntax-dynamic-import to import named exports
  }))
);
const Profile = React.lazy(() =>
  import("./pages/profile").then((module) => ({
    default: module.Profile, // this method or use babel plugin babel-plugin-syntax-dynamic-import to import named exports
  }))
);

const DPRdemo = React.lazy(() => import("./pages/dprDemo"));

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div>
      <h1>Welcome to React</h1>
      <BrowserRouter>
        <Header />
        <div className="container">
          <React.Suspense fallback={<div>loadign</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/dpr" element={<DPRdemo />} />
            </Routes>
          </React.Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
