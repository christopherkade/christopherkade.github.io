import styled from 'styled-components';

import BackgroundImage from 'assets/svg/background_waimakariri.svg'

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  height: 100%;
  background-image: url(${BackgroundImage});

  @media(min-width: 768px) {
    background-size: cover;
  }
`

export default Background;