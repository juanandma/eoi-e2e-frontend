import {useCountries} from "../hooks/useCountries.js";

export const CountriesPage = () => {
    const {countries, deleteCountry, addCountry} = useCountries();

    return (
        <>
            <h1>Countries</h1>
            <CountryList countries={countries} deleteCountry={deleteCountry} />
            <CountryForm addCountry={addCountry} />
        </>
    )
}

export const CountryList = ({countries, deleteCountry}) => {
    return (
        <ul>
            {countries.map((country) => (
                <CountryItem key={country.id} country={country} deleteCountry={deleteCountry} />
            ))}
        </ul>
    )
}

export const CountryItem = ({country, deleteCountry}) => {
    return (
        <li>
            {country.name}
            <button onClick={() => deleteCountry(country.id)}>Delete</button>
        </li>
    )
}

export const CountryForm = ({addCountry}) => {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addCountry(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}
