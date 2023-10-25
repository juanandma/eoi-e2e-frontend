export const addPostNewCountry = async (countryName: string): Promise<any> => {
  Axios.post('http://localhost:3000/newcountry', {
    countryName: name
  })
};