import { vi, describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import DeleteCountryButton from "./DeleteCountryButton.jsx";
import userEvent from "@testing-library/user-event";

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe("DeleteCountryButton", () => {

    afterEach(cleanup); 
  it("renders the DeleteCountryButton component", () => {
    const country = {id: "1"}
    const mockDelete = vi.fn();

    render(<DeleteCountryButton country={country} deleteCountry={mockDelete}  />);
    

    expect(screen.getByRole("button", { name: /Delete/i })).toBeInTheDocument();
  });

  it("should call the delete country function when the button is pressed", async () => {
    const country = {id: "1"}
    const mockDelete = vi.fn();
    const { user } = setup(<DeleteCountryButton country={country} deleteCountry={mockDelete}  />);

    await user.click(screen.getByRole("button", { name: /Delete/i }));

    expect(mockDelete).toBeCalledWith("1")
  });
});
