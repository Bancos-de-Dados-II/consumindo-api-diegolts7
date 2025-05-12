import { Box } from "@mui/material";
import styled from "styled-components";

// Componente estilizado do Post-it (mantido)
const PostItNote = styled(Box)<{
  $color: string;
  $rotation: number;
}>`
  position: relative;
  width: 300px;
  min-height: 250px;
  padding: 16px;
  background-color: ${(props) => props.$color};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2),
    -1px -1px 0px rgba(255, 255, 255, 0.3) inset;
  transform: rotate(${(props) => props.$rotation}deg);
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: "Reenie Beanie", cursive, sans-serif;
  word-break: break-word;
  overflow: hidden;

  /* Efeito de papel amassado sutil */
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 50%
    ),
    linear-gradient(rgba(255, 255, 255, 0.3) 50%, transparent 50%);
  background-size: 5px 5px;

  /* Efeito de sombra de cola no topo */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 15px;
    background: rgba(255, 255, 255, 0.5);
    transform: translateX(-50%);
    border-radius: 0 0 10px 10px;
  }

  &:hover {
    transform: rotate(${(props) => props.$rotation + Math.random() * 4 - 2}deg)
      translateY(-5px);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3),
      -1px -1px 0px rgba(255, 255, 255, 0.3) inset;
    z-index: 10;
  }
`;

// Componente de prioridade melhorado
const PriorityIndicator = styled.div<{ $color: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);

  /* Tooltip para mostrar o texto da prioridade */
  &:hover:after {
    content: attr(data-priority);
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: #333;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    font-family: sans-serif;
  }
`;

export { PriorityIndicator, PostItNote };
