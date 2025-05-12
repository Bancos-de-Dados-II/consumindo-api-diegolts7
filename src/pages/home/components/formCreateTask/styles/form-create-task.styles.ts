import { Box, Button, MenuItem, Select, TextareaAutosize } from "@mui/material";
import styled from "styled-components";

// Styled Components
const StyledNote = styled(Box)<{ $color: string; $rotation: number }>`
  position: relative;
  width: 500px;
  min-height: 400px;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.$color};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2),
    -1px -1px 0px rgba(255, 255, 255, 0.3) inset;
  transform: rotate(${(props) => props.$rotation}deg);
  transition: all 0.3s ease;
  font-family: "Reenie Beanie", cursive, sans-serif;
  word-break: break-word;
  overflow: hidden;

  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 50%
    ),
    linear-gradient(rgba(255, 255, 255, 0.3) 50%, transparent 50%);
  background-size: 5px 5px;

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
`;

const StyledTitleInput = styled(TextareaAutosize)`
  font-family: "Reenie Beanie", cursive;
  font-size: 2rem;
  width: 100%;
  resize: none;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3px;
  border-radius: 5px;
  outline: none;
  color: rgba(0, 0, 0, 0.7);

  &:disabled {
    background: transparent;
    cursor: default;
    user-select: none;
  }
`;

const StyledCircleButton = styled(Button)<{ $bg?: string }>`
  width: 45px;
  height: 45px;
  min-width: 0;
  border-radius: 50%;
  padding: 0;
  background-color: ${({ $bg }) => ($bg ? $bg : "rgba(0, 0, 0, 0.2)")};
  transition: 1s ease-in-out;

  svg {
    color: white;
  }

  &:hover {
    opacity: 0.9;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const StyledSelect = styled(Select)`
  font-size: 1.2rem;
  font-family: "Reenie Beanie", cursive;
  color: rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  padding: 2px 6px;

  & fieldset {
    border: none;
  }

  & .MuiSelect-select {
    padding: 4px 8px;
  }
`;

const StyledSelectPrioridade = styled(Select)`
  font-size: 1.2rem;
  font-family: "Reenie Beanie", cursive;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;

  & .MuiSelect-select {
    padding: 4px 8px;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  & fieldset {
    border: none !important;
  }

  &:hover fieldset {
    border: none;
  }

  &.Mui-focused fieldset {
    border: none;
  }

  &.MuiOutlinedInput-root {
    padding: 0;
  }

  & input {
    outline: none;
  }
`;

const MenuItemPrioridade = styled(MenuItem)`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export {
  StyledCircleButton,
  StyledNote,
  StyledSelect,
  StyledTitleInput,
  StyledSelectPrioridade,
  MenuItemPrioridade,
};
