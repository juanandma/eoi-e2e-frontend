import Axios from 'axios';


function CountryForm() {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (

    <div className="Country-form">
      <form onSubmit={handleSubmit}>
        <p>New Country Name</p>

        <input
          className="CountryName"
          type="text"
          placeholder="New country name ..."
          onChange={(e) => { setName(e.target.value) }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

