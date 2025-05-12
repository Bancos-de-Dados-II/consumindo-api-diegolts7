import { Button } from "@mui/material";
import styled from "styled-components";

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  text-align: center;
  border-radius: 12px;
  margin: 1rem 0;
`;

const ErrorStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  text-align: center;
  margin: 1rem 0;
`;

const ErrorStateMinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  text-align: center;
  margin: 0.5rem 0;
`;

const ButtonError = styled(Button)<{ size?: "small" | "medium" | "large" }>`
  background-color: #dc3545 !important;
  color: white !important;
  border-radius: 20px !important;
  padding: ${({ size }) =>
    size === "small" ? "4px 12px !important" : "8px 24px !important"};
  text-transform: none !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  font-size: ${({ size }) =>
    size === "small" ? "0.75rem !important" : "0.875rem !important"};

  &:hover {
    background-color: #c82333 !important;
    transform: translateY(-1px) !important;
  }
`;

export {
  EmptyStateContainer,
  ErrorStateContainer,
  ErrorStateMinContainer,
  ButtonError,
};
