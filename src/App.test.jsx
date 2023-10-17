import { beforeEach, describe, expect, it } from "vitest";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { App } from "./App.jsx";
import userEvent from "@testing-library/user-event";
import { DependenciesContext } from "./context/Dependencies.js";
import { TemperatureServiceFake } from "./services/TemperatureServiceFake.js";

describe("App", () => {
  beforeEach(() => {
    const temperatureService = new TemperatureServiceFake();

    const dependencies = { temperatureService };

    render(
      <DependenciesContext.Provider value={dependencies}>
        <App />
      </DependenciesContext.Provider>,
    );
  });

  it("loads the current temperature as an emoji", async () => {
    const element = await screen.findByText("😌");

    expect(element).toBeInTheDocument();
  });

  it("loads the current temperature as an area label on the emoji", async () => {
    const element = await screen.findByLabelText("Current weather is warm");

    expect(element).toBeInTheDocument();
  });

  it("converts from celsius to kelvin the current weather", async () => {
    const user = userEvent.setup();

    await user.selectOptions(screen.getByLabelText("To"), "Kelvin");

    const element = await screen.findByText(
      (_, { textContent }) => textContent === "Conversion result: 297.5 K",
    );
    expect(element).toBeInTheDocument();
  });
});

