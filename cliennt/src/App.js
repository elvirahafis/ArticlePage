import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  Login,
  NavbarLogin,
  NavbarPage,
  Posting,
  AboutPage,
  Contact,
  Register,
} from "./component";

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLogin />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<NavbarPage />}>
            <Route index element={<HomePage />} />
            <Route path="/home/post" element={<Posting />} />
            <Route path="/home/about" element={<AboutPage />} />
            <Route path="/home/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
