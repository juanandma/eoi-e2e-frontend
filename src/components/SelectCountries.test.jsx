import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SelectCountries } from "./SelectCountries.jsx";

const mockOnChange = vi.fn();

describe('SelectCountries', () => {
  const countries = [
    { id: "1", name: "Spain", temperature: 30 },
    { id: "2", name: "France", temperature: 20 },
  ];
  it('renders a label', () => {
    render(
      <SelectCountries
        id="countries"
        label="Country"
        value={countries[0]}
        countries={countries}
        onChange={mockOnChange}
      />
    );

    expect(screen.getByLabelText('Country')).toHaveValue(countries[0].name);
  });
});

