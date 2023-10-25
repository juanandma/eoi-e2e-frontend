import { render, screen, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it, vi, describe, afterEach } from "vitest"
import { NewCountryForm } from "./NewCountryForm.jsx";

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('CountryForm', () => {
  afterEach(cleanup)

  it('renders without errors', () => {
    render(<NewCountryForm ></NewCountryForm>)
    expect(screen.getByText('')).toBeInTheDocument()
  })
  it("should render the basic fields", () => {
    render(<NewCountryForm />);
    expect(
      screen.getByRole("heading", { name: "New Country Form" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  })
  it("should validate form fields", async () => {
    const mockSave = jest.fn();
    const { user } = setup(<NewCountryForm saveData={mockSave} />);
    await user.type(
      screen.getByRole("textbox", { name: /name/i }),
      ""
    );
    await user.click(screen.getByRole("button", { name: /save/i }));
    expect(screen.getAllByRole("alert")).toHaveLength(1);
    expect(mockSave).not.toBeCalled();
  })
  it("should submit correct form data", async () => {
    const mockSave = jest.fn();
    const { user } = setup(<RecipeForm saveData={mockSave} />);
    // Enter country name
    await user.type(
      screen.getByRole("textbox", { name: /name/i }),
      "Islandia"
    );
    expect(mockSave).toHaveBeenCalledWith({
      name: "Islandia",
    });
  });
});
