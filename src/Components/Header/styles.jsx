import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #ff6666;
    color: #fff;
    font-family: arial;
    font-size: 1rem;
  `}
`;
