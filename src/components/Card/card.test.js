import { render, screen } from "@testing-library/react";
import Card from ".";

describe("render card", () => {
  it("check class name in wrapper carrd", () => {
    render(
      <Card>
        <h1>test</h1>
      </Card>
    );
    const wrapper = screen.getByTestId("wrapper-card");
    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveClass("wrapper-card");
    expect(wrapper.firstChild.firstChild).toContainHTML("<h1>test</h1>");
  });

  it("check first children in wrapper card", () => {
    render(<Card></Card>);
    const wrapper = screen.getByTestId("wrapper-card");
    expect(wrapper.firstChild).toHaveClass("card ");
  });
});
