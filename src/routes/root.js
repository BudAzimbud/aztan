import Home from "../pages/Home/Home";
import NotFound from "../pages/Notfound";
import Profile from "../pages/Profile";
import Roadmap from "../pages/Roadmap";
import About from "../pages/About";
import Started from "../pages/Started";
export const home = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Not found",
    path: "*",
    element: <NotFound />,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    name: "Roadmap",
    path: "/roadmap",
    element: <Roadmap />,
  },
  {
    name: "Get Started",
    path: "/get-started",
    element: <Started />,
  },
];
