import React from "react";
import { Box, Typography } from "@mui/material";
import type { Task } from "../../../../api/task/type";
import { useTask } from "../../hooks/use-task";
import { PostItNote, PriorityIndicator } from "../../styles/task.styles";
import {
  getPriorityColor,
  getPriorityText,
  getTaskColor,
  getTypeText,
} from "../../../../utils/task/infoTasks";

// Componente da Task atualizado
export const TaskPostIt: React.FC<{
  task: Task;
  onClick: (task: Task) => void;
}> = ({ task, onClick }) => {
  const { rotation } = useTask();

  return (
    <PostItNote
      $color={getTaskColor(task.type)}
      $rotation={rotation}
      onClick={() => onClick(task)}
    >
      <PriorityIndicator
        $color={getPriorityColor(task.prioridade)}
        data-priority={getPriorityText(task.prioridade)}
      />

      {/* Badge do tipo */}
      {task.type && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: "2px 8px",
            borderRadius: "12px",
            fontSize: "0.9rem",
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          {getTypeText(task.type)}
        </Box>
      )}

      {task.title && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 1,
            mt: task.type ? 4 : 0,
            fontFamily: '"Reenie Beanie", cursive',
            fontSize: "1.6rem",
          }}
        >
          {task.title}
        </Typography>
      )}

      <Typography
        sx={{
          mt: task.title ? 0 : 4,
          fontFamily: '"Reenie Beanie", cursive',
          fontSize: "1.35rem",
          minHeight: "100px",
        }}
      >
        {task.description.slice(0, 100) +
          (task.description.length > 100 ? "..." : "")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 8,
          left: 8,
          right: 8,
          fontSize: "0.8rem",
          color: "rgba(0, 0, 0, 0.5)",

          span: {
            fontSize: "1rem",
          },
        }}
      >
        <span>Criado em: {new Date(task.createdAt).toLocaleDateString()}</span>
        <span>Atualizado: {new Date(task.updatedAt).toLocaleDateString()}</span>
      </Box>
    </PostItNote>
  );
};
