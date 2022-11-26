import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
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
            element={<Layout>{data.element}</Layout>}
            exact={true}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
