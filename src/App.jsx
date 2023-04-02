import React from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./components/home";

const About = React.lazy(() =>
  import("./components/about/index").then((module) => ({
    default: module.About, // this method or use babel plugin babel-plugin-syntax-dynamic-import to import named exports
  }))
);
const Profile = React.lazy(() =>
  import("./components/profile").then((module) => ({
    default: module.Profile, // this method or use babel plugin babel-plugin-syntax-dynamic-import to import named exports
  }))
);

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
            </Routes>
          </React.Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
