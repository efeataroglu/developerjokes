import React, { useState } from "react";

import {
  Wrapper,
  Row,
  Column,
  Header,
  Form,
  Search,
  Button,
  Image,
} from "./components/styled/index";
import joker from "./images/joker.png";
import axios from "axios";
import JokeItem from "./components/JokeItem";
import { Joke, Flag } from "./common/types";

const BASE_URL = "https://v2.jokeapi.dev/joke/programming";

function App() {
  const [search, setSearch] = useState("");

  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getJoke = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=400`;
    const { data } = await axios.get(ENDPOINT);
    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }
    setSearch("");
  };

  return (
    <>
      <Wrapper>
        <Row>
          <Header>Developer Jokes</Header>
          <Image src={joker} alt="Joker" />
        </Row>
        <Form onSubmit={getJoke}>
          <Search
            type="text"
            placeholder="Search.."
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Do it</Button>
        </Form>
        <Column>
          {error && <p>Sorry, no jokes found.</p>}
          {jokes.length > 0 &&
            jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
        </Column>
      </Wrapper>
    </>
  );
}

export default App;
