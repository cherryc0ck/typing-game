import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

type CountDownProps = {
  isPlay: boolean;
  onChangePlay: () => void;
};

const CountDown = ({ isPlay, onChangePlay }: CountDownProps) => {
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [timer]);

  return (
    <StyledContainer>
      <span>{timer}</span>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${({ theme }) => css`
    ${theme.flex.rowCenter};
    span {
      color: ${theme.colors.black};
      font-family: "lato";
      ${theme.typo.heavy32};
    }
  `}
`;

export default CountDown;
