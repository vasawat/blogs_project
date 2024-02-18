import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Notfound from "./components/Notfound";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BlogProvider } from "./context/blogContext";
function App() {
  return (
    <BlogProvider className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Blog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<Notfound />}></Route>
            <Route path="/home" element={<Navigate to="/" />}></Route>
            <Route path="/blog/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
