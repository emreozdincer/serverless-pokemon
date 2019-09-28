// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  exportPathMap() {
    // Generate page urls for all possible pokemons to summon
    const POKEMONS = ['lugia', 'rayquaza', 'darkrai', 'mewtwo', 'suicune'];

    const pokemonPages = POKEMONS.reduce(
      (pokemonPages, poke) =>
        Object.assign({}, pokemonPages, {
          [`/summon/${poke}`]: {
            page: '/summon',
            query: { slug: poke }
          }
        }),
      {}
    )

    const result = {
      '/': { page: '/' },
      '/pokemons': { page: '/pokemons' },
      '/summon/some-legendary-pokemon': { page: '/summon', query: { slug: 'some-legendary-pokemon' } },
      ...pokemonPages,
    };

    return result
  },
})