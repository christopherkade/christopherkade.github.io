import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
0% {
  transform: translateY(-1000px) translateX(-1000px);
}
100% {
  transform: translateX(-${props => props.offset}px) translateY(-${props => props.offset}px);
}
`;

const Wrapper = styled.div`
  background-color: var(--color-${props => props.color});
  padding: 4px 12px 12px 12px;
  min-height: 150px;
  position: absolute;
  width: 80%;
  z-index: ${props => props.index};
  transform: translateX(-${props => props.mobileOffset.x}px) translateY(-${props => props.mobileOffset.y}px);
  cursor: pointer;
  box-shadow: 0 25px 60px rgba(59, 43, 91, 0.7);
  animation: ${slideIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  @media(min-width: 768px) {
    width: auto;
    min-height: 200px;
    min-width: 435px;
    transform: translateX(-${props => props.offset}px) translateY(-${props => props.offset}px);
  }
`

const ContainerTitle = styled.h3`
  margin: 0;
  font-weight: 300;
`

const Container = ({ children, index, color, title }) => {
  const offset = 40 * index;
  // We have more height than width in mobile, so we offset it more on Y than X
  const mobileOffset = {
    x: 10 * index,
    y: 40 * index
  };
  const indexCalc = 10 - index;

  return (
    <Wrapper color={color} index={indexCalc} offset={offset} mobileOffset={mobileOffset} draggable="true">
      <ContainerTitle>{title}</ContainerTitle>
      {children}
    </Wrapper>
  )
}

export default Container;
