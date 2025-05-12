import React from "react";
import {
  ButtonError,
  ErrorStateContainer,
  ErrorStateMinContainer,
} from "./style";
import { FaExclamationTriangle } from "react-icons/fa";
import { Typography } from "@mui/material";

interface ErrorApiProps {
  message?: string;
  event?: () => void;
  isMinSize?: boolean;
}

const ErrorApi: React.FC<ErrorApiProps> = ({
  message,
  event,
  isMinSize = false,
}) => {
  if (isMinSize) {
    return (
      <ErrorStateMinContainer>
        <FaExclamationTriangle size={24} color="#dc3545" />
        <Typography variant="body2" color="textSecondary">
          {message ? message : "Erro ao carregar"}
        </Typography>
        {event && (
          <ButtonError
            variant="contained"
            onClick={event}
            size="small"
            startIcon={<FaExclamationTriangle size={12} />}
          >
            Tentar novamente
          </ButtonError>
        )}
      </ErrorStateMinContainer>
    );
  }

  return (
    <ErrorStateContainer>
      <FaExclamationTriangle size={48} color="#dc3545" />
      <Typography variant="h6" color="textSecondary">
        {message ? message : "Ocorreu um erro ao carregar o conteúdo"}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Por favor, tente novamente mais tarde
      </Typography>
      {event && (
        <ButtonError
          variant="contained"
          onClick={event}
          startIcon={<FaExclamationTriangle size={16} />}
        >
          Tentar novamente
        </ButtonError>
      )}
    </ErrorStateContainer>
  );
};

export default ErrorApi;
