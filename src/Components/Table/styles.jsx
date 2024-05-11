import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${() => css`
    table {
      max-width: 90%;
      width: 100%;
      margin: 0 auto;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      th,
      td {
        border: 1px solid #ccc; 
        padding: 5px;
      }
      th {
        background: #d1d1d1;
      }
    }
  `}
`;
