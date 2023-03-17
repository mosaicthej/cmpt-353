import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Navigator from "./components/Navigator";
 

export default function App() {
  return (
    <BrowserRouter>
      <Navigator />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="create" element={<Create />} />
        </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);