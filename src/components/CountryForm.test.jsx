mport { render, screen, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it, vi, describe, afterEach } from "vitest"
import { CountryForm } from "./CountryForm"

describe('CountryForm', () => {
  afterEach(cleanup)

  it('renders without errors', () => {
    render(<CountryForm ></CountryForm>)
    expect(screen.getByText('')).toBeInTheDocument()
  })
  it("should render the basic fields", () => {
    render(<CountryForm />);
    expect(
      screen.getByRole("heading", { name: "New recipe" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /description/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: /servings/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add ingredient/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  }

})