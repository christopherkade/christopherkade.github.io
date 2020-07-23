import React from 'react';

import Background from 'components/Background/Background';
import Container from 'components/Container/Container';
import Title from 'components/Title/Title'
import Subtitle from 'components/Subtitle/Subtitle'
import Paragraph from 'components/Paragraph/Paragraph'
import Link from 'components/Link/Link'

import BackgroundImage from 'assets/svg/background.svg'

const App = () => {
  return (
    <>
      <Background>
        <Container color="secondary" index="0">
          <Title>
            Christopher Kade
          </Title>

          <Subtitle>
            Front-end • UX/UI • Design
          </Subtitle>

          <Paragraph>
            Working for <Link title="Zenika website - New window" href="https://www.zenika.com" target="_blank">Zenika</Link> &
          currently consulting for Accor Hotels.
         </Paragraph>
        </Container>

        <Container color="tertiary" index="1" title="ABOUT">

        </Container>

        <Container color="highlight" index="2" title="BLOG">

        </Container>
      </Background>
    </>
  );
}

export default App;
