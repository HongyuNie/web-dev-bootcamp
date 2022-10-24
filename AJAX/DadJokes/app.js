const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getDadJoke = async () => {
  // const res = await axios.get("https://icanhazdadjoke.com/")
//   console.log(res); // headers - content-type: "text-html"

  try {
    const config = { headers: { Accept: "application/json" } }; // headers - content-type: "application/json"
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
    // console.log(res.data.joke); // will only give the joke when call founction in console
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
