import {
  Box,
  CircularProgress,
  FormControl,
  MenuItem,
  Stack,
} from "@mui/material";
import { IoClose } from "react-icons/io5";
import {
  MenuItemPrioridade,
  StyledCircleButton,
  StyledNote,
  StyledSelect,
  StyledSelectPrioridade,
  StyledTitleInput,
} from "./styles/form-create-task.styles";
import { FaCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import type { Task } from "../../../../api/task/type";
import { getTaskColor } from "../../../../utils/task/infoTasks";
import { useFormCreateTask } from "./hooks/use-form-create-task";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

export interface FormCreateTaskProps {
  onClose: () => void;
  task?: Task;
  action?: "VIEW_EDIT" | "CREATE";
}

const FormCreateTask = ({ props }: { props: FormCreateTaskProps }) => {
  const { onClose, task, action = "VIEW_EDIT" } = props;

  const {
    onSubmit,
    mutationCreateTask,
    control,
    watch,
    handleSubmit,
    errors,
    isDirty,
    viewEdit,
    handleViewEdit,
    handleDeleteTask,
  } = useFormCreateTask(onClose, action, task);

  return (
    <>
      <StyledNote $color={getTaskColor(watch("type"))} $rotation={0}>
        <Box
          component={"form"}
          id="form-create-task"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            display={"flex"}
          >
            <Box sx={{ minWidth: 100 }}>
              <FormControl
                fullWidth
                size="small"
                disabled={action === "VIEW_EDIT" && viewEdit === "VIEW"}
              >
                <Controller
                  name="type"
                  control={control}
                  render={({ field }) => (
                    <StyledSelect {...field}>
                      <MenuItem
                        value={"PROFISSIONAL"}
                        sx={{ fontSize: "0.9rem", color: "rgba(0, 0, 0, 0.7)" }}
                      >
                        Profissional
                      </MenuItem>
                      <MenuItem
                        value={"PESSOAL"}
                        sx={{ fontSize: "0.9rem", color: "rgba(0, 0, 0, 0.7)" }}
                      >
                        Pessoal
                      </MenuItem>
                    </StyledSelect>
                  )}
                />
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 100 }}>
              <FormControl
                fullWidth
                size="small"
                disabled={action === "VIEW_EDIT" && viewEdit === "VIEW"}
              >
                <Controller
                  name="prioridade"
                  control={control}
                  render={({ field }) => (
                    <StyledSelectPrioridade {...field}>
                      <MenuItemPrioridade value={"URGENTE"}>
                        <FaCircle color="#ff5252" /> Urgente
                      </MenuItemPrioridade>
                      <MenuItemPrioridade
                        value={"IMPORTANTE"}
                        sx={{ fontSize: "0.9rem", color: "rgba(0, 0, 0, 0.7)" }}
                      >
                        <FaCircle color="#ff9800" /> Importante
                      </MenuItemPrioridade>
                      <MenuItemPrioridade
                        value={"NORMAL"}
                        sx={{ fontSize: "0.9rem", color: "rgba(0, 0, 0, 0.7)" }}
                      >
                        <FaCircle color="#4caf50" /> Normal
                      </MenuItemPrioridade>
                    </StyledSelectPrioridade>
                  )}
                />
              </FormControl>
            </Box>
          </Stack>

          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <StyledTitleInput
                disabled={action === "VIEW_EDIT" && viewEdit === "VIEW"}
                minRows={2}
                maxRows={2}
                placeholder={
                  action === "VIEW_EDIT" && viewEdit === "VIEW"
                    ? "Sem título"
                    : "Escreva o título"
                }
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <StyledTitleInput
                disabled={action === "VIEW_EDIT" && viewEdit === "VIEW"}
                minRows={7}
                maxRows={10}
                placeholder="Escreva a descrição..."
                {...field}
              />
            )}
          />
        </Box>
      </StyledNote>

      <Stack direction={"row"} spacing={2}>
        <StyledCircleButton onClick={onClose} title="Sair">
          <IoClose size={25} color="white" />
        </StyledCircleButton>

        {action === "CREATE" ? (
          <>
            {isDirty && (
              <StyledCircleButton
                $bg={
                  Object.entries(errors).length > 0
                    ? "rgba(255, 0, 0, 0.6)"
                    : "rgba(76, 175, 80, 0.6)"
                }
                title="Criar task"
                type="submit"
                form="form-create-task"
              >
                {mutationCreateTask.isPending ? (
                  <CircularProgress size={20} />
                ) : (
                  <SendIcon />
                )}
              </StyledCircleButton>
            )}
          </>
        ) : viewEdit === "EDIT" ? (
          <>
            <StyledCircleButton
              $bg="rgba(33, 150, 243, 0.7)"
              title="Fechar editar"
              onClick={() => handleViewEdit("VIEW")}
            >
              <EditOffIcon />
            </StyledCircleButton>

            {isDirty && (
              <StyledCircleButton
                $bg={
                  Object.entries(errors).length > 0
                    ? "rgba(255, 0, 0, 0.6)"
                    : "rgba(76, 175, 80, 0.6)"
                }
                title="Editar task"
                type="submit"
                form="form-create-task"
              >
                {mutationCreateTask.isPending ? (
                  <CircularProgress size={20} />
                ) : (
                  <FaCheck size={25} color="white" />
                )}
              </StyledCircleButton>
            )}
          </>
        ) : (
          <>
            <StyledCircleButton
              $bg="rgba(33, 150, 243, 0.7)"
              title="Editar"
              onClick={() => handleViewEdit("EDIT")}
            >
              <EditIcon />
            </StyledCircleButton>
            <StyledCircleButton
              title="Deletar task"
              $bg="rgba(255, 0, 0, 0.6)"
              onClick={handleDeleteTask}
            >
              <DeleteIcon />
            </StyledCircleButton>
          </>
        )}
      </Stack>
    </>
  );
};

export default FormCreateTask;
