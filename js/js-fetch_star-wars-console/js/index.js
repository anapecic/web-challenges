console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  const r2d2 = data.results.find((dude) => {
    return dude.name.includes("R2");
  });
  console.log(r2d2.eye_color);
}

fetchData(url);
