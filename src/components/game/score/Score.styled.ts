import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Span = styled(motion.span)`
  ${({ theme }) => css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    ${theme.flex.row()};
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: ${theme.colors.sub};
    ${theme.typo.eBold16};
    color: ${theme.colors.main};
  `};
`;
