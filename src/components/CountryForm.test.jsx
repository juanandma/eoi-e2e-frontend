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

const validIp = "1.1.1.1";
const notValidIp = "1.1.11";

describe("CountryForm component", () => {
  afterEach(cleanup);  

  it("should render the fields", () => {
    render(<CountryForm />);
  

    expect(
      screen.getByRole("heading", { name: "Add new country", level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /ip/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });

  

  it("should accept ip input", async () => {
    render(<CountryForm />);
    const ipAdressField = screen.getByRole("textbox", { name: /ip/i });
    setup();
    const user = userEvent.setup();

    await user.clear(ipAdressField);
    await user.type(ipAdressField, validIp);

    expect(ipAdressField).toHaveValue(validIp);
  });

  it("should display ip required validation", async () => {
    render(<CountryForm />);
    const ipAdressField = screen.getByRole("textbox", { name: /ip/i });
    setup();
    const user = userEvent.setup();
    
    await user.type(ipAdressField, validIp);
    await user.clear(ipAdressField);

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getAllByRole("alert")).toHaveLength(1);
  });

  it('should display minlength validation', async () => {
    render(<CountryForm />);
    const ipAdressField = screen.getByRole("textbox", { name: /ip/i });
    setup();
    const user = userEvent.setup();
    
    await user.type(ipAdressField, "hola");

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getAllByRole("alert")).toHaveLength(1);

    await user.clear(ipAdressField);
    await user.type(ipAdressField, validIp);    

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

   
  it("should submit correct form data", async () => {
    const mockSave = vi.fn();
    const { user } = setup(<CountryForm addCountry={mockSave} />);
    
    // Enter country ipadress
    await user.type(screen.getByRole("textbox", { name: /ip/i }), validIp);
    // Save the form
    await user.click(screen.getByRole("button", { name: /save/i }));

    expect(mockSave).toBeCalled();
    expect(mockSave).toHaveBeenCalledWith(validIp);

  });

  it("should not save the invalid ip", async () => {
    const mockSave = vi.fn();
    const { user } = setup(<CountryForm addCountry={mockSave} />);

    await user.click(screen.getByRole("button", { name: /save/i }));
    
    expect(mockSave).not.toBeCalled();

    await user.type(screen.getByRole("textbox", { name: /ip/i }), validIp);
    await user.clear(screen.getByRole("textbox", { name: /ip/i }));

    expect(screen.getAllByRole("alert")).toHaveLength(1);
    expect(mockSave).not.toBeCalled();
  });  
});
