import React from "react";
import styled from "styled-components";

import background from "assets/background/background.png";
import { ReactComponent as StandIcon } from "assets/icon/stand.svg";

const Monitor = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledScreen />
        <StyledChin />
        <StandIcon />
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  margin-bottom: 10rem;
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 70rem;
  height: 36rem;
  margin: 0 auto;
  border-radius: 20px 20px 0px 0px;
  background-color: #c8cacb;

  svg {
    position: absolute;
    top: 37rem;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, 0);
  }
`;

const StyledScreen = styled.div`
  position: absolute;
  left: 2.4rem;
  top: 2.4rem;
  width: 65rem;
  height: 31rem;
  background: url(${background}), rgba(196, 196, 196, 0.2);
  background-color: #fff;
  border-radius: 3px;
`;

const StyledChin = styled.div`
  position: absolute;
  top: 36rem;
  left: 0;
  width: 100%;
  height: 3.5rem;

  background: #dee0e2;
  border-radius: 0px 0px 20px 20px;
`;

export default Monitor;
