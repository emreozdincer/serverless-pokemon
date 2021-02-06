import "../styles.scss";
import { Container, Placeholder, Image, Transition } from 'semantic-ui-react';
import Head from 'next/head';
import Header from '../components/header';
import Constants from '../constants';

class Summon extends React.Component {
  state = {
    loading: true,
    visible: false,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ loading: false }, () =>
        this.setState({ visible: true }));
    }, 1000);
  }

  static async getInitialProps({ query }) {
    return { slug: query.slug };
  }

  render() {
    const { loading, visible } = this.state;

    const pokemon = Constants.POKEMONS.includes(this.props.slug) ? this.props.slug : 'unown';
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </Head>
        {!loading && <Header title={pokemon} />}
        <Container>
          <div className="pokemon-title">
            {loading && (
              <Placeholder style={{ margin: '5rem auto' }}>
                <Placeholder.Header>
                  <Placeholder.Line length="full" />
                </Placeholder.Header>
              </Placeholder>
            )}

            {loading ? (
              <Placeholder className="pokemon-summoned-image" >
                <Placeholder.Image rectangular />
              </Placeholder>
            ) : (
                <>
                  <Transition visible={visible} animation='fade' duration={500}>
                    <Image
                      className="pokemon-summoned-image"
                      src={`/static/img/${pokemon.toLowerCase()}.jpg`}
                    />
                  </Transition>
                </>
              )}
          </div>
        </Container>
      </>
    );
  }
}

export default Summon;