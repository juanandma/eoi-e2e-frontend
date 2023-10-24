import {useEffect, useState} from "react";
import {CountryService} from "../services/CountryService.js";

const countryService = new CountryService();

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
        countries,
        deleteCountry,
        addCountry,
    }
}
