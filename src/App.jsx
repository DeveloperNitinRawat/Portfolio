import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import SideNav from "./components/SideNav";
import GlobalStyle from "./assets/GlobalStyle";
import { ThemeProvider } from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const theme = {
    color: {
      bgColor: "#191d2b",
      borderColor: "#2e344e",
      primary: "#0d6efd",
      lightPrimary: "rgba(3, 127, 255, 0.3)",
      para: "#dcdde1",
      white: "#fff",
      bodyBg: "#10121b",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
