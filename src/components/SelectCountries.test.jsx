import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SelectCountries } from "./SelectCountries.jsx";
import { countries } from "../enum/countries.js";

const mockOnChange = vi.fn();

describe('SelectCountries', () => {
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
