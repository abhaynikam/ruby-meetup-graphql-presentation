// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Fit,
  Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#e72dac',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  firstFacebookGithubOrganizationExample: require('./images/first_facebook_organization_github_example.png'),
  githubDatabaseSchema: require('./images/github_database_schema.png'),
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Ruby: How GraphQL made my life simple
          </Heading>
          <Text size={6} textColor="primary" textAlign="center" textSize={20}>
            @abhaynikam13
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps textAlign="left">
            In today's meetup we'll look at following things
          </Heading>
          <List textColor="primary">
            <ListItem textSize={30}>Introduction to GraphQL.</ListItem>
            <ListItem textSize={30}>Problems of REST APIs and how GraphQL has solved them.</ListItem>
            <ListItem textSize={30}>Demo a simple Rails application with GraphQL and React.</ListItem>
            <ListItem textSize={30}>Conclusion</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary">
            Before we understand how GraphQL helped us, let's look at some of limitations of REST.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Problem 1:
          </Heading>
          <Text size={6} textColor="primary" textAlign="left" textSize={35}>
            Strict REST design principles, we ended up making multiple requests to server.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary" textAlign="left" textSize={35}>
            Let's understand it with the example of GitHub Organization page
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Fit>
            <Image src={images.firstFacebookGithubOrganizationExample} />
          </Fit>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Fit>
            <Image src={images.githubDatabaseSchema} />
          </Fit>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>We made 4 API request</Heading>

          <List textColor="primary">
            <Appear>
              <ListItem textSize={20}>GET /orgs/:org</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={20}>GET /orgs/:org/repos</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={20}>GET /repos/:owner/:repo/pulls</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={20}>GET /repos/:owner/:repo/issues</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Problem 2:
          </Heading>
          <Text size={6} textColor="primary" textAlign="left" textSize={35}>
            Custom REST endpoints, too many problems.
          </Text>
          <List textColor="primary">
            <Appear>
              <ListItem textSize={20}>Name of the custom endpoint</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={20}>Overfetching of data</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Problem 3:
          </Heading>
          <Text size={6} textColor="primary" textAlign="left" textSize={35}>
            Documentation of APIs.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Problem 4:
          </Heading>
          <Text size={6} textColor="primary" textAlign="left" textSize={35}>
            Development cost
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Problem 5:
          </Heading>
          <Text size={6} textColor="primary" textAlign="left" textSize={35}>
            API versioning
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Problem 6:
          </Heading>
          <Text size={6} textColor="primary" textAlign="left" textSize={35}>
            Performance
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Problem 7:
          </Heading>
          <Text size={6} textColor="primary" textAlign="left" textSize={35}>
            API can sometime return unexpected type data
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            What is GraphQL?
          </Heading>

          <Text size={6} textColor="primary" textAlign="left" textSize={30}>
            A GraphQL query is a string that is sent to a server to be interpreted and fulfilled, which then returns JSON back to the client.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            With GraphQL
          </Heading>

          <List textColor="primary">
            <Appear>
              <ListItem textSize={25}>No overfetching of unwanted data</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Get many resources data in single request</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Strongly-typed</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Declarative</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Powerful developer tools like GraphiQL and GraphQL Playground</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>API versioning not required</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>GraphQL can be used with programming language</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary" textSize={35}>
            GraphQL is not only for React projects.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary" textSize={35}>
            Okay. Let's see demo.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="tertiary" caps textSize={35}>
            Thank You.
          </Heading>

          <Text size={6} textColor="tertiary" textSize={35}>
            Abhay Nikam
          </Text>
          <Text size={6} textColor="primary" textSize={25}>
            twitter: abhaynikam13
          </Text>
          <Text size={6} textColor="primary" textSize={25}>
            GitHub: abhaynikam
          </Text>
        </Slide>
      </Deck>
    );
  }
}
