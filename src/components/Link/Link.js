import styled from 'styled-components';

const Link = styled.a`
  color: var(--color-highlight);
  font-weight: bold;
  text-decoration: none;

  &:hover {
      opacity: 0.8;
  }
`

export default Link;