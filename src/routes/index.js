import { BrowserRouter, Route, Routes } from "react-router-dom";
import { home } from "./home";

const routes = [...home];

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((data) => (
          <Route
            key={data.path}
            path={data.path}
            element={data.element}
            exact={true}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
