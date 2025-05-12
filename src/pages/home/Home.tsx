import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { TaskRequest } from "../../api/task/TaskRequest";
import CustomRequest from "../../components/customRequest/CustomRequest";
import { Box, Button, Stack, Typography } from "@mui/material";
import { TaskPostIt } from "./components/task/Task";
import CustomNavbar from "../../components/navBar/NavBar";
import { IoAdd } from "react-icons/io5";
import FormCreateTask, {
  type FormCreateTaskProps,
} from "./components/formCreateTask/FormCreateTask";
import type { CustomModalProps } from "../../components/customModal/CustomModal";
import CustomModal from "../../components/customModal/CustomModal";

const Home = () => {
  const [stateModalCreateTask, setStateModalCreateTask] =
    useState<CustomModalProps>({
      open: false,
      onClose: () =>
        setStateModalCreateTask((prev) => ({ ...prev, open: false })),
    });

  const [stateFormTask, setStateFormTask] = useState<FormCreateTaskProps>({
    task: undefined,
    action: "VIEW_EDIT",
    onClose() {
      setStateModalCreateTask((prev) => ({ ...prev, open: false }));
    },
  });

  const handleOpenModalCreateTask = () => {
    setStateModalCreateTask((prev) => ({ ...prev, open: true }));
  };

  const handleOpenModalFormTask = ({
    task,
    action,
  }: Omit<FormCreateTaskProps, "onClose">) => {
    setStateFormTask((prev) => ({ ...prev, task, action }));
    handleOpenModalCreateTask();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      return await TaskRequest.getTasks();
    },
  });

  return (
    <>
      <CustomNavbar
        componentNavBar={
          <>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              fontFamily={'"Reenie Beanie", cursive'}
            >
              MINHAS TASKS
            </Typography>

            <Button
              onClick={() => {
                handleOpenModalFormTask({ action: "CREATE", task: undefined });
              }}
              variant="contained"
              sx={{
                width: 40,
                height: 40,
                minWidth: 0, // Remove o minWidth padrão do MUI
                borderRadius: "50%",
                padding: 0, // Garante que o conteúdo fique centralizado
                marginLeft: "auto",
              }}
            >
              <IoAdd size={20} />
            </Button>
          </>
        }
      >
        <CustomRequest
          isLoading={isLoading}
          isSuccess={data?.isSuccess}
          isClear={
            data && data?.value
              ? data?.value?.length > 0
                ? false
                : true
              : true
          }
          componentClear={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                color: "#777",
                textAlign: "center",
                height: "100%",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                Nenhuma tarefa encontrada
              </h3>
              <p style={{ fontSize: "0.95rem", maxWidth: "300px" }}>
                Crie uma nova tarefa para começar a organizar suas atividades.
              </p>
            </div>
          }
          children={
            <Stack direction={"column"} spacing={5} width={"100%"}>
              <Box
                sx={{
                  display: "flex",
                  gap: "2rem",
                  flex: 1,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {data?.value.map((task) => (
                  <TaskPostIt
                    key={task.id}
                    task={task}
                    onClick={(task) => {
                      handleOpenModalFormTask({ task, action: "VIEW_EDIT" });
                    }}
                  />
                ))}
              </Box>
            </Stack>
          }
        />
      </CustomNavbar>
      <CustomModal
        props={stateModalCreateTask}
        modalCentral={<FormCreateTask props={stateFormTask} />}
      />
    </>
  );
};

export default Home;
