import React from 'react';

import styled from 'styled-components';

import Background from 'components/Background/Background';
import Container from 'components/Container/Container';
import Title from 'components/Title/Title';
import Subtitle from 'components/Subtitle/Subtitle';
import Paragraph from 'components/Paragraph/Paragraph';
import Link from 'components/Link/Link';

const SocialParagraph = styled(Paragraph)`
  position: absolute;
  bottom: 10px;
`

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
            consulting for Accor Hotels.
         </Paragraph>

          <SocialParagraph>
            <Link title="Twitter - New window" href="https://twitter.com/christo_kade" target="_blank">Twitter</Link> • <Link title="Github - New window" href="https://github.com/christopherkade" target="_blank">Github</Link> • <Link title="LinkedIn - New window" href="https://www.linkedin.com/in/christopher-kade/" target="_blank">LinkedIn</Link>
          </SocialParagraph>
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
