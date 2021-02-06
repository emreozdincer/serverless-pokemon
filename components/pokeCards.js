import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import { Button, Card, Image, Placeholder, Transition } from 'semantic-ui-react';

const cards = [
  {
    avatar: '/static/img/mewtwo.jpg',
    date: 'Generation I',
    header: 'Mewtwo',
    description: `Mewtwo (Japanese: ミュウツー Mewtwo) is a Psychic-type Legendary Pokémon`,
  },
  {
    avatar: '/static/img/darkrai-avatar.jpg',
    date: 'Generation IV',
    header: 'Darkrai',
    description: 'Darkrai (Japanese: ダークライ Darkrai) is a Dark-type Mythical Pokémon',
  },
  {
    avatar: '/static/img/suicune-avatar.jpg',
    date: 'Generation II',
    header: 'Suicune',
    description: 'Suicune (Japanese: スイクン Suicune) is a Water-type Legendary Pokémon',
  },
];

export default class PokeCards extends Component {
  state = { loading: true, visible: false };

  componentDidMount() {
    setInterval(() => {
      this.setState({ loading: false }, () => this.setState({ visible: true }));
    }, 1500);
  }


  render() {
    const { loading, visible } = this.state;

    return (
      <Fragment>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </Head>
        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(cards, card => (
            <Card key={card.header}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                  <>
                    <Transition visible={visible} animation='fade' duration={500}>
                      <Image src={card.avatar} />
                    </Transition>
                  </>

                )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                    <Fragment>
                      <Card.Header>{card.header}</Card.Header>
                      <Card.Meta>{card.date}</Card.Meta>
                      <Card.Description>{card.description}</Card.Description>
                    </Fragment>
                  )}
              </Card.Content>

              <Card.Content extra>
                <Button icon="heart" color="red" disabled={loading}>
                </Button>
                <Button icon='trash' disabled={loading}>
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    );
  }
}
