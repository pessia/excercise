import axios from "axios";

export const getJoke = async (joke_number) => {
  try {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    const data = response.data;
    return data.value;
  } catch (error) {
    console.log(error);
    return "No Jokes";
  }
};