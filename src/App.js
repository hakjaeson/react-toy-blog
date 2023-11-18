import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import Login from "./components/Login";

function App() {
  return (
    <div>
      {/* BroswerRoute */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/post-create/*" element={<PostCreate />}></Route>
          <Route path="/main-page" element={<Main />}></Route>
          <Route path="/post-edit" element={<PostEdit />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
