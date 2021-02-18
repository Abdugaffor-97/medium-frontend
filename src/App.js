import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import NewStory from "./pages/new-story/NewStory";
import Topics from "./pages/topics/Topics";
import Read from "./pages/read/Read";
import Search from "./pages/search/Search";
import Stats from "./pages/stats";
import Login from "./pages/login";
import Stories from "./pages/stories";

const routes = [
  { path: "/", component: Home },
  { path: "/new-story", component: NewStory },
  { path: "/topics", component: Topics },
  { path: "/read/:slug", component: Read },
  { path: "/search", component: Search },
  { path: "/stats", component: Stats },
  { path: "/stories", component: Stories },
  // { path: "/login", component: Login },
];

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Route to="/" exact component={NavBar} />
      {routes.map(({ path, component }, idx) => (
        <Route key={idx} exact path={path} component={component} />
      ))}
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
