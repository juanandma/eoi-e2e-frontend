export class CountryService {
    baseUrl = "http://localhost:3000/country";
    constructor(fetch = (...args) => globalThis.fetch(...args)) {
        this.fetch = fetch;
    }

    async getCountries() {
        const response = await this.fetch(`${this.baseUrl}`);

        if (!response.ok) {
            throw new Error("Could not get countries");
        }

        const data = await response.json();

        return data.countries;
    }

    async deleteCountry(id) {
        const response = await this.fetch(`${this.baseUrl}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Could not delete country");
        }
    }

    async addCountry(name) {
        const response = await this.fetch(`${this.baseUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        });

        if (!response.ok) {
            throw new Error("Could not add country");
        }

        const data = await response.json();

        return data.country;
    }
}
