export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "1429a1093cmsh71e6de5f714badfp1c5c32jsn38413aa6738d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {headers: headers, });

  const result = await response.json()

  return result
}
