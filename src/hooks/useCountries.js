import {useEffect, useState} from "react";
import {CountryService} from "../services/CountryService.js";

const countryService = new CountryService();

const mockCountries = [
    {id: "00000000-0000-0000-0000-000000000000", name: "Spain", temperature: 30},
    {id: "00000000-0000-0000-0000-000000000001", name: "France", temperature: 20},
    {id: "00000000-0000-0000-0000-000000000002", name: "Germany", temperature: 10},
];

export const useCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const countries = await countryService.getCountries();
            setCountries(countries);
        }
        getCountries();
    }, []);

    const deleteCountry = async (id) => {
        setCountries(countries.filter((country) => country.id !== id));
        await countryService.deleteCountry(id);
    }

    const addCountry = async (name) => {
        const country = await countryService.addCountry(name);
        setCountries([...countries, country]);
    }

    return {
        countries: mockCountries,
        deleteCountry,
        addCountry,
    }
}
