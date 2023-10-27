import { vi, describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DeleteCountryButton from "./DeleteCountryButton.jsx";

describe("DeleteCountryButton", () => {
    let country, deleteCountry;

    beforeEach(() => {
        render(<DeleteCountryButton country={country} deleteCountry={deleteCountry} />);
    });

    it("renders the DeleteCountryButton component", () => {
        const deleteButton = screen.getByText("Delete");
        expect(deleteButton).not.toBe(null);
    });

});
