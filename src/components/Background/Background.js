import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as BackgroundImage } from 'assets/svg/background_waimakariri.svg'

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const BackgroundSvg = styled(BackgroundImage)`
  display: block;
  height: 100%;
  width: 100%;

  .circle {
    animation: ${fadeIn} 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  height: 100%;

  @media(min-width: 768px) {
    background-size: cover;
  }
`

const Background = ({ children }) => {
  return (
    <Wrapper>
      <BackgroundSvg />

      {children}
    </Wrapper>
  )
}

export default Background;