import React from "react";
import { EmptyStateContainer } from "./style";
import { FaBoxOpen } from "react-icons/fa";
import { Typography } from "@mui/material";

interface EmptyProps {
  message?: string;
}

const Empty: React.FC<EmptyProps> = ({ message }) => {
  return (
    <EmptyStateContainer>
      <FaBoxOpen size={50} color="#6c757d" />
      <Typography variant="h6" color="textSecondary">
        {message ? message : "O conteudo está vazio"}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Quando estiver itens eles apareceram aqui
      </Typography>
    </EmptyStateContainer>
  );
};

export default Empty;
