import "../styles.scss";
import { Container } from "semantic-ui-react";
import Head from 'next/head';
import Header from "../components/header";
import PokeCards from "../components/pokeCards";

function Pokemons() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </Head>
      <Header />
      <Container>
        <PokeCards></PokeCards>
      </Container>
    </>
  );
}

export default Pokemons;