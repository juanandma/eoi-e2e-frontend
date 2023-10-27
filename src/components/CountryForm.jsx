import { useState } from "react";

export const CountryForm = ({ addCountry }) => {
  const [ip, setIp] = useState("");
  const [errors, setErrors] = useState({
    ip: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!isValid()) return;
    //Pasar al dominio?    
    setIp("");

    //try catch
    await addCountry(ip);
    //finally    
  };

  function handleChange(event) {
    const ipActualizada = event.target.value;


    //actualiza ip. Solo existe un campo.
    setIp(ipActualizada);
    //Error si la ip no es valida
    setErrors(() => validate(ipActualizada));
  }

  //Pasar al dominio?
  function validate(ip) {
    let errors = { ip: "" };
    if (ip.length === 0) {
      errors.ip = "Ip Address is required";
    }
    if (ip.length > 0 && ip.length < 7) {
      errors.ip = "Ip Address needs to be at least 7 characters.";
    }
    /*
    if (check_times_char(".")) {
      errors.ip = "Ip Address needs to contain 4 dots";
    }
    */
    return errors;
  }

  function isValid() {
    return (
      errors.ip.length === 0
    );
  }

  //testeo
  function check_times_char(str1, char, times) {
    /*
    let cont = 0;
    let overlimit = false;
    let i = 0;
    while (i < str1.length && !overlimit) {
      if (str1.charAt(i) == char && cont <= times) {
        cont++;
        if (cont <= times) {
          overlimit = true;
        }
        i++;
      }
    }
    if (cont = times && !overlimit) return true;
    return false;
    */
    return true
  }

  return (
    <div className="country-container">
      <h1>Add new country</h1>
      <form className="country-form" onSubmit={handleSubmit}>
        <label htmlFor="ip">Ip Adress</label>
        <input
          id="ip"
          value={ip}
          onChange={handleChange}
          placeholder="Enter the ip address of the new country"
          required
          type="text"
          name="ip"
        ></input>
        {errors.ip.length > 0 && (
          <div role="alert" className="ip error">
            <p>{errors.ip}</p>
          </div>
        )}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
