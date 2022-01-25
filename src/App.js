import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/UI/Search";
import axios from "axios";
import "./App.css";

const App = () => {
  // this state will be fetching our characters from our api
  const [characters, setCharacters] = useState([]);
  // We use isLoading for when we're fetching from api to let us know if the data is being loaded or being fetched or not
  // initially set to true when loading then set to false when it is loaded
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  // fetching our data with useEffect
  // You can't use useEffect on the useEffect function so, you would have to create a new function
  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      // update the fetched characters to the setCharacter updated state func
      // set is loading to false
      setCharacters(result.data);
      setIsLoading(false);
    };
    // we needed to call the function we used to fetch our characters
    fetchCharacters();
  }, [query]);

  const getQuery = (query) => setQuery(query);
  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery} />
      <CharacterGrid characters={characters} isLoading={isLoading} />
    </div>
  );
};

export default App;
