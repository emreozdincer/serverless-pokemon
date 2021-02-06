import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Card, Container, Loader } from 'semantic-ui-react';
import Header from "../components/header";
import "../styles.scss";
import Constants from '../constants';
class Home extends React.Component {
  state = {
    pokemonIndex: 0,
    selectedPokemon: '',
    pokemons: [],
  }

  async componentDidMount() {
    await fetch(Constants.API_GET_POKEMON_NAMES, {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(responseJson => this.setState({ pokemons: responseJson }))
      .catch(err => this.setState({ pokemons: Constants.POKEMONS })); // Mocked case

    let { pokemons, pokemonIndex } = this.state;

    setInterval(() => {
      pokemonIndex = ( pokemonIndex + 1 ) % 5;
      this.setState({
        selectedPokemon: pokemons[pokemonIndex],
        pokemonIndex,
      });
    }, 1500);
  }

  render() {
    const randInt = Math.floor(Math.random() * 5);
    const randomPokemon = Constants.POKEMONS[randInt];
    const { selectedPokemon } = this.state;

    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </Head>
        <div className="with-background">
          <Header isHome={true} />
          <div >
            <Container >
              <Card.Group>
                <Card raised={false} color={"teal"} onClick={() => Router.push(`/summon?slug=${randomPokemon}`, '/summon/some-legendary-pokemon')}>
                  <Card.Content>
                    <Card.Header>Legendary Pokemon</Card.Header>
                    <Card.Meta>Summon a legendary pokemon!</Card.Meta>
                    <Card.Description>Lugia, Suicune, and more. If you are ready, let's go.</Card.Description>
                  </Card.Content>
                </Card>

                <Card color={"blue"} onClick={() => Router.push('/pokemons')}
                  header='Poke Profiles'
                  meta='See the profiles of available pokemons'
                  description='Characteristics of each pokemon that make them unique. Learn more.'
                />
              </Card.Group>
            </Container>
            <br />
            <Container>
              <p className="roster">
                Roster | {selectedPokemon === '' ? <Loader active inline /> : selectedPokemon}
              </p>
            </Container>
            <img className="heart-img" src="/static/img/heart.png"></img>
          </div>
        </div>
      </>
    );
  }
}

export default Home;