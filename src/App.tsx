import React from "react";
import { nanoid } from "nanoid";
import Work from "./components/pages/Work";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/pages/Projects";
import TechStack from "./components/pages/TechStack";

const App = () => {
  const routes = [
    {
      id: nanoid(),
      path: "/",
      component: <Home />,
    },
    {
      id: nanoid(),
      path: "/about",
      component: <About />,
    },
    {
      id: nanoid(),
      path: "/work",
      component: <Work />,
    },
    {
      id: nanoid(),
      path: "/projects",
      component: <Projects />,
    },
    {
      id: nanoid(),
      path: "/tech-stack",
      component: <TechStack />,
    },
  ]

  return (
    <Routes>
      {routes.map((item:any) => (
        <Route key={item.id} path={item?.path} element={item?.component} />
      ))}
    </Routes>
  );
};

export default App;
