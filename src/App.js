import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  Footer,
  Contact,
  ContactSuccess,
  Portfolio,
  SingleViewPage,
  NavMenu,
} from "./components";
import "./style/App.css";
import portfolioData from "./portfolioData";

const App = () => {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <BrowserRouter>
      <div className={activeNav ? "App moved": "App"}>
        <Header setActiveNav={setActiveNav} />
        <NavMenu setActiveNav={setActiveNav} activeNav={activeNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<ContactSuccess />} />
          {portfolioData.map((project, idx) => {
            return (
              <Route
                key={"projectRoute" + idx}
                path={`/portfolio/${project.route}`}
                element={<SingleViewPage project={project} />}
              />
            );
          })}
        </Routes>
        <Footer activeNav={activeNav}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
