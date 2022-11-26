import Home from "../pages/Home/Home";
import { home } from "./home";

function findElement(key, value) {
  return home.find((data) => data[key] === value);
}

describe("testing path of url", () => {
  test("path home is /", () => {
    const homeRouter = findElement("name", "Home");
    expect(homeRouter.path).toEqual("/");
    expect(homeRouter.element).toEqual(<Home />);
  });
});
