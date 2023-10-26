import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi, describe, afterEach } from "vitest";
import { CountryForm } from "./CountryForm.jsx";

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe.skip("CountryForm", () => {
  afterEach(cleanup);

  it.only("should render the fields", () => {
    render(<CountryForm />);
    expect(
      screen.getByRole("heading", { name: "New Country Form" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /ipadress/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });
  it("should validate form fields", async () => {
    const mockSave = vi.fn();
    const { user } = setup(<CountryForm addCountry={mockSave} />);


    await user.click(screen.getByRole("button", { name: /save/i }));
    expect(screen.getAllByRole("alert")).toHaveLength(2);
    expect(mockSave).not.toBeCalled();
  });
  it("should submit correct form data", async () => {
    const mockSave = vi.fn();

    const { user } = setup(<CountryForm addCountry={mockSave} />);
    // Enter country name
    await user.type(screen.getByRole("textbox", { name: /name/i }), "Islandia");
    // Enter country ipadress
    await user.type(screen.getByRole("textbox", { name: /ipadress/i }), "1.1.1.1");
    // Save the form
    await user.click(screen.getByRole("button", { name: /save/i }));

    expect(mockSave).toHaveBeenCalledWith({ name: 'Islandia', ipadress: '1.1.1.1' });
  });
});